# How to Configure

1. git clone inside "packages folder" `git clone git@github.com:tarex/reusecore.git`
2. `yarn` on main directory.
3. `yarn web` on main directory

## Icons

We use custom flaticon. If you want to see our icon list then you need to go to icons page. After running `yarn web` command then go to your browser and write `http://localhost:3000/icons` and hit enter.

## Ready For Firebase

1. keep the static folder [css, images, fonts] same both in root public/static folder & landing/static folder
2. Always keep the `package.json` file same/synched among inside landing & functions folder

## To remove a submodule you need to:

1. Delete the relevant section from the .gitmodules file.
2. Stage the .gitmodules changes git add .gitmodules
3. Delete the relevant section from .git/config.
4. Run git rm --cached path_to_submodule (no trailing slash).
5. Run rm -rf .git/modules/path_to_submodule (no trailing slash).
6. Commit git commit -m "Removed submodule "
7. Delete the now untracked submodule files rm -rf path_to_submodule
