# Playground

Repository for playing with technologies

## Installation (windows):

1. Install cntlm

2. ----

3. Install git

3. Set env variables

    setx http_proxy http://127.0.0.1:3128

    setx https_proxy http://127.0.0.1:3128

4. Config git

    git config --global http.proxy  http://127.0.0.1:3128

    git config --global https.proxy http://127.0.0.1:3128

## Installation (mac):

1. Install xcode (download from app store)

2. Set env variables

    export http_proxy=http://127.0.0.1:8080

    export https_proxy=http://127.0.0.1:8080

3. Install [homebrew](http://brew.sh/)

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

4. Install git (requires xcode)

5. Config git

    git config --global http.proxy  http://127.0.0.1:8080

    git config --global https.proxy http://127.0.0.1:8080