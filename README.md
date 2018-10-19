git init
git status
git add
git commit -m"mo ta phan commit"

git --global user.email " "
git --global user.name 


git log 
git show 
git diff : xem noi dung co modified

working directory
staging area
git reposiroty

git checkout : trở về trạng thái cũ trước khi staging area; chuyển sang nhánh mơi làm việc
git reset : reset file từ khu vực staging về trạng thái checkout


git checkout -b <branch> (branching)
git checkout <branch>
git merge
<!-- 
brand A ,B 
A <--B

git checkout B

git merge B

master <-- feature/chicken-class

 -->

 git branch -D <branch> (delete branch)


 git reset --soft <to_commit> 		staging
 git reset --mixed <to_commit>		working directory
 git reset --hard <to_commit>		bỏ các commit trên đường đi


 git revert (dao ngược lại)


.gitignore
