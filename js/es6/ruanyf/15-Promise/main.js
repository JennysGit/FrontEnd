/*

Promise: pending, resolved, rejected //保存未来才会结束的事件。
pending: 进行中
resolved: 成功
rejected: 失败的操作
// 异步操作

*/

// var promise  = new Promise(function(resolve, reject){
// 	console.log("promise");

// 	if()
// })

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

// 2s后打印value的值
timeout(2000).then((value) => {
    console.log(value)
});


let promise = new Promise(function(resolve, reject) {
    console.log("Promise"); //立即执行
    resolve();
});

promise.then(function() {
    console.log("resolved");
})

console.log("hi!");


function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        const image = new Image();

        image.onload = function() {
            resolve(image);
        }

        image.onerror = function() {
            reject(new Error('could not load image at ' + url));
        }

        image.src = url;
    });
}

const getJSON = function(url) {
    const promise = new Promise(function(resolve, reject) {
        const handler = function() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }

        };

        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept', 'application/json');
        client.send();


    });

    return promise;
}

getJSON('/post.json').then(function(json) { console.log(json) }, function(error) {
    console.log(error);
});