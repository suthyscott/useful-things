## Killing port numbers:

Windows:
`npx kill-port [number]`

Mac: 
`lsof -i tcp:[port num] kill -9 <PID>`

## Adding git SSH key

First check to see if you already have a public ssh key:
ls -al ~/.ssh
The above command will list out all ssh keys. If you already have a public key it will end with a .pub. 

If you don't see a public key you'll need to run the following command: 
ssh-keygen -t ed25519 -C "your_email@example.com" 
The email in this case is your github email. 

Once you've generated the key with the above command you need to copy it:
Windows: clip < ~/.ssh/id_ed25519.pub
Mac: pbcopy < ~/.ssh/id_ed25519.pub

Then go to your settings on GitHub, SSH and GPG keys, Add new SSH key. Name the key based on the computer you're using, and paste in the value that the above command will copy for you. 