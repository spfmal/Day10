function login() {
    // 예시로 지정한 ID와 PW
    const validUsername = "user1234";
    const validPassword = "password";
    
    // 입력된 ID와 PW
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // 입력된 ID와 PW가 유효한지 확인
    if (username === validUsername && password === validPassword) {
        alert("로그인 되었습니다.");
    } else {
        alert("ID 또는 PW가 잘못되었습니다.");
    }
}

// Enter 키 누를 때 login 함수 호출
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        login();
    }
});
// "Enter" 버튼 클릭 이벤트 처리
document.querySelector(".enter").addEventListener("click", login)