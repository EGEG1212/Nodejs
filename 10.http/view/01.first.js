exports.first = function() {
    return `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My First Server</title>
    </head>
    <body>
        <h1>😋내가 처음으로 만든 웹 서버:-)</h1>
    </body>
    </html>
    `;
}

//html에서 쉽게 작성하고
//서버에서 불려주려고  exports.first = function() {
//    return ` 이걸 붙여주었다  😎
//` (템플릿리터럴) 😍 엄청 대단한 녀석... 
//cmd에서 01.서버기본을 실행시키니 크롬에서 내용확인가능