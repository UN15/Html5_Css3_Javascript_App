//전역변수
const API_BASE_URL = "http://localhost:8080";

//DOM 엘리먼트 가져오기
const bookForm = document.getElementById("bookForm");
const bookTableBody = document.getElementById("bookTableBody");

//Document Load 이벤트 처리하기
document.addEventListener("DOMContentLoaded", function () {
    loadBook();
});

//Form Submit 이벤트 처리하기
bookForm.addEventListener("submit", function (event) {
    //기본으로 설정된 Event가 동작하지 않도록 하기 위함
    event.preventDefault();
    console.log("Form 제출 되었음...");

    //FormData 객체생성 <form>엘리먼트를 객체로 변환
    const bookFormData = new FormData(bookForm);
    // stuFormData.forEach((value, key) => {
    //     console.log(key + ' = ' + value);
    // });

    //사용자 정의 Book 객체생성 ( 공백 제거 )
    const bookData = {
        title: bookFormData.get("title").trim(),
        author: bookFormData.get("author").trim(),
        isbn: bookFormData.get("isbn").trim(),
        price: bookFormData.get("price").trim(),
        publishDate: bookFormData.get("publishDate").trim(),
        description: bookFormData.get("description").trim(),
        language: bookFormData.get("language").trim(),
        pageCount: bookFormData.get("pageCount").trim(),
        publisher: bookFormData.get("publisher").trim(),
        coverImageUrl: bookFormData.get("coverImageUrl").trim(),
        edition: bookFormData.get("edition").trim(),
    };

    //유효성 체크하기
    if (!validateBook(bookData)) {
        //검증체크 실패하면 리턴하기
        return;
    }
    //유효한 데이터 출력하기
    console.log(bookData);

});

//데이터 유효성을 체크하는 함수
function validateBook(book) {// 필수 필드 검사
    if (!book.title) {
        alert("제목을 입력해주세요.");
        return false;
    }

    if (!book.author) {
        alert("작가를 입력해주세요.");
        return false;
    }

    if (!book.isbn) {
        alert("도서번호를 입력해주세요.");
        return false;
    }
    
    const bookIsbnPattern = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
    if (!bookIsbnPattern.test(book.isbn)) {
        alert("도서번호는 10 ~ 13자리의 숫자, hyphen은 빼주세요");
        return false;
    }

    const bookPricePattern = /^(0|[1-9]\d*)$/;
    if (!bookPricePattern.test(book.price)) {
        alert("가격은 0 또는 양의 정수를 입력하세요.");
        return false;
    }
   
    return true;
}

function loadBook() {
        console.log("도서 목록 로드 중 ...");
}