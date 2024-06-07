## Git Branches
1. **git branch -> zeigt alle lokalen branches an
2. **git branch Branchname -> legt neuen branch mit dem namen an (git branch feat/add-nav-bar)
3. **git branch -d -Branchname -> löscht angegebenen branch
4. **git branch checkout Branchname -> changed auf den angegebenen branch (checkt den branch out)
5.a **git push origin Branchname -> legt Branch in Github an
5.b **git push --set-upstream origin Branchname -> legt branch in Github an und merkst sich den branch - so kann ich immer nur mit push pushen ohen jedes Mal "git push origin branchname" zu schreiben

## Git Merge
1. In den Branch in den die Änderung rein soll navigieren -> git checkout branchname
2. **git merge Branchname -> führt branches zusammen
-> Merge findet erstmal nur lokal statt!
3. **git push, oder git push origin branchname -> schiebt alles zu Github