# Playground

Repository for playing with technologies

## Installation (windows):

Install cntlm

> Add info from windows here

Install git

Set env variables

    setx http_proxy http://127.0.0.1:3128

    setx https_proxy http://127.0.0.1:3128

Config git

    git config --global http.proxy  http://127.0.0.1:3128

    git config --global https.proxy http://127.0.0.1:3128

## Installation (mac):

Install xcode (download from app store)

Set env variables

    export http_proxy=http://127.0.0.1:8080

    export https_proxy=http://127.0.0.1:8080

Install [homebrew](http://brew.sh/)

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Install git

Config git

    git config --global http.proxy  http://127.0.0.1:8080

    git config --global https.proxy http://127.0.0.1:8080


## Cloning

    git clone https://github.com/tiagotaveiragomes/playground.git


## To push commits

    git add .

    git status

    git commit -m "commit message"

    git push origin master

When pushing, git will probably ask for your github login credentials
[generating ssh keys](https://help.github.com/articles/generating-ssh-keys/)

