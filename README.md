# NodeJS-LearningRepo

# For nodemon on debbuging
1) Run ```npm install -g nodemon```.
2) go to ```.vscode>launch.json``` and following code.
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}\\app.js",
            "restart": true,
            "runtimeExecutable": "nodemon",
            "console": "integratedTerminal"
        }
    ]
}
```