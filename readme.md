```
git checkout -b u1 // create a branch u1
git commit -a -m "message1" // commit a change

git checkout master
git pull
git merge u1
git push
git branch -D u1


git branch -v // List branch

// Process to follow

Open transaction by locking transaction file
git pull
merge json
write json
git commit -a -m "message1" 
git push
Release transaction by unlocking transaction file
```
