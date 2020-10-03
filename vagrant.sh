#!/bin/sh

init=$(date +%s)

export APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=true
export DEBIAN_FRONTEND=noninteractive

hostname=$(grep -m 1 '\.test' /etc/hosts | sed 's/		*/ /g' | cut -d ' ' -f 2)
locale=${1:-'en_US.UTF-8'}
release=$(lsb_release -cs)
timezone=${2:-'UTC'}



# ----- System -----------------------------------------------------------------

if grep -q 'root:!' /etc/shadow; then
  printf 'Updating root password'
  printf 'root:root' | chpasswd
fi

if ! timedatectl | grep -q "Time zone: $timezone"; then
  printf 'Updating system time zone'
  timedatectl set-timezone "$timezone"
fi

if ! locale | grep -iq "LANG=$locale" ; then
  printf 'Updating system locale'
  update-locale LANG="$locale"
fi

if [ ! -e /etc/apt/sources.list.d/vagrant.list ]; then
  printf 'Updating apt sources'
  wget -qO - https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - >/dev/null
  printf 'deb https://deb.nodesource.com/node_14.x %s main\n' "$release" >> /etc/apt/sources.list.d/vagrant.list
  apt-get -qq update
fi

if ! dpkg -l | grep -q 'nginx'; then
  printf 'Installing system packages'
  apt-get -qqy install \
    git                \
    nodejs             \
    vim                \
    >/dev/null 2>&1
fi



# ----- Utilities --------------------------------------------------------------

touch /home/vagrant/.bash_aliases

if [ -e /vagrant/package.json ]; then
  npm set progress=false

  if ! command -v n >/dev/null; then
    printf 'Installing n'
    npm -s install -g n >/dev/null 2>&1
    cd /vagrant || exit 1
    if n -q auto >/dev/null 2>&1; then
      PATH=$PATH
    fi
    cd /home/vagrant || exit 1
  fi

  if [ ! -d /vagrant/node_modules ]; then
    printf 'Installing Node packages'
    cd /vagrant || exit 1
    npm -s install >/dev/null 2>&1
    cd /home/vagrant || exit 1
  fi

  if ! grep -q '/node_modules/' /home/vagrant/.bash_aliases; then
    printf 'Updating bash path for Node\n'
    # shellcheck disable=SC2016
    printf 'export PATH=/vagrant/node_modules/.bin:$PATH\n' >> /home/vagrant/.bash_aliases
    printf 'alias run="npm run -s"\n' >> /home/vagrant/.bash_aliases
  fi

  npm set progress=true
fi



# ----- Finish -----------------------------------------------------------------

stop=$(date +%s)
mins=$(((stop - init) / 60))
secs=$((stop - init - mins * 60))

printf '\nProvisioning completed in %02dm %02ds\n' "$mins" "$secs"
printf 'Now serving %s at %s\n' "$(hostname -I | cut -d ' ' -f 2)" "$hostname"
printf 'See sys.%s for server administration' "$hostname"
