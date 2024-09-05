// 임시 데이터 저장소 (실제로는 서버 데이터베이스를 사용해야 합니다)
let newsletters = [];

// 소식지 목록 가져오기
async function fetchNewsletters() {
    // 실제 구현에서는 서버에서 데이터를 가져와야 합니다
    return newsletters;
}

// 특정 소식지 가져오기
async function fetchNewsletter(id) {
    // 실제 구현에서는 서버에서 데이터를 가져와야 합니다
    return newsletters.find(newsletter => newsletter.id === parseInt(id));
}

// 소식지 저장하기
async function saveNewsletter(newsletter) {
    if (newsletter.id) {
        // 기존 소식지 수정
        const index = newsletters.findIndex(n => n.id === parseInt(newsletter.id));
        if (index !== -1) {
            newsletters[index] = { ...newsletters[index], ...newsletter };
        }
    } else {
        // 새 소식지 추가
        newsletter.id = newsletters.length + 1;
        newsletters.push(newsletter);
    }
    // 실제 구현에서는 서버에 데이터를 저장해야 합니다
    return newsletter;
}

// 소식지 삭제하기
async function deleteNewsletterFromServer(id) {
    newsletters = newsletters.filter(newsletter => newsletter.id !== parseInt(id));
    // 실제 구현에서는 서버에서 데이터를 삭제해야 합니다
}

// 로그아웃 함수
function logout() {
    // 실제 구현에서는 서버에 로그아웃 요청을 보내고, 세션을 삭제해야 합니다
    localStorage.removeItem('adminLoggedIn');
    window.location.href = 'admin-login.html';
}

// 로그인 상태 확인
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'admin-login.html';
    }
}

// 페이지 로드 시 로그인 상태 확인
document.addEventListener('DOMContentLoaded', checkLoginStatus);
