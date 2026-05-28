# 개발자 웹 이력서 개발 로드맵

## 프로젝트 개요

- **목적**: 채용 담당자에게 어필할 수 있는 개인 개발자 웹 이력서 제작
- **기술 스택**: HTML5, CSS3, JavaScript (ES6+), Tailwind CSS v3 (Play CDN)
- **구조**: 빌드 도구 없는 순수 정적 사이트 (npm/번들러 미사용)
- **배포 목표**: GitHub Pages / Netlify / Vercel

---

## 이력서 샘플 데이터

### 기본 정보

| 항목 | 내용 |
|------|------|
| 이름 | 김개발 |
| 직함 | 풀스택 개발자 (3년 차) |
| 이메일 | developer@example.com |
| GitHub | github.com/kimdev |
| 블로그 | blog.kimdev.io |
| 위치 | 서울, 대한민국 |

### 자기소개 (About Me)

> 사용자 경험을 중시하며 유지보수하기 좋은 코드를 작성하는 것을 목표로 하는 풀스택 개발자입니다.  
> 협업과 지속적인 학습을 즐기며, 팀과 함께 성장하는 개발 문화를 지향합니다.

**핵심 강점 3가지**
- 빠른 프로토타이핑 — 아이디어를 신속하게 동작하는 코드로 전환
- 클린 코드 — 가독성과 재사용성을 고려한 코드 작성
- 커뮤니케이션 — 기획·디자인 팀과의 원활한 협업 경험

### 기술 스택 (Skills)

| 분류 | 기술 |
|------|------|
| Frontend | HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS |
| Backend | Node.js, Express, Python, Django |
| Database | MySQL, PostgreSQL, MongoDB |
| DevOps | Git, Docker, GitHub Actions, AWS (EC2, S3) |
| Tools | VS Code, Figma, Notion, Jira |

### 경력 사항 (Experience)

1. **(주)테크스타트업** — 풀스택 개발자 `2023.03 ~ 현재`
   - 사내 관리자 대시보드를 React 기반으로 재구축 → 렌더링 성능 40% 개선
   - REST API 설계 및 Node.js/Express 서버 개발
   - Docker Compose로 개발·스테이징 환경 통합 관리

2. **(주)웹에이전시** — 프론트엔드 개발자 `2022.01 ~ 2023.02`
   - 기업 홈페이지 및 쇼핑몰 퍼블리싱 10건 이상 납품
   - 모바일 퍼스트 반응형 UI 개발
   - 크로스 브라우저 호환성 이슈 해결 (IE11 포함)

### 프로젝트 (Projects)

1. **TaskFlow** — 팀 협업 태스크 관리 앱
   - React + Node.js + MongoDB 풀스택 개인 프로젝트
   - JWT 인증, Socket.io 실시간 알림, Kanban 보드 구현
   - GitHub: `github.com/kimdev/taskflow`

2. **DevBlog** — 개발 기술 블로그
   - Next.js + Markdown 기반 정적 블로그
   - Lighthouse 성능 점수 95점 이상 달성
   - GitHub: `github.com/kimdev/devblog`

### 학력 (Education)

- **한국대학교** 컴퓨터공학과 학사 `2018.03 ~ 2022.02`

### 자격증 (Certifications)

- 정보처리기사 `2022.06`
- AWS Certified Cloud Practitioner `2023.09`

---

## 폴더 구조

```
resume/
├── index.html          # 단일 페이지 — 모든 섹션 포함
├── css/
│   └── style.css       # 커스텀 애니메이션, Tailwind 미처리 스타일
├── js/
│   └── main.js         # 다크모드, 스크롤, 타이핑 효과 등 인터랙션
└── assets/
    ├── profile.jpg     # 프로필 이미지 (WebP 권장)
    └── icons/          # SVG 아이콘
```

---

## 섹션 구조 (`index.html`)

| `id` | 내용 |
|------|------|
| `#hero` | 프로필 이미지, 이름, 타이핑 효과 직함, 연락처 링크 |
| `#about` | 자기소개 문단, 핵심 강점 카드 3개 |
| `#skills` | 카테고리별 기술 뱃지 (pill) |
| `#experience` | 타임라인 형태 경력 사항 |
| `#projects` | 프로젝트 카드 그리드 |
| `#education` | 학력 및 자격증 리스트 |
| `#contact` | 이메일 복사 버튼, 소셜 링크 아이콘 |

---

## 디자인 토큰

| 항목 | 값 |
|------|-----|
| Primary Color | `#3B82F6` (Tailwind `blue-500`) |
| Background Light | `#F9FAFB` |
| Background Dark | `#111827` |
| Font (한글) | Noto Sans KR (Google Fonts) |
| Font (영문/숫자) | Inter (Google Fonts) |
| Border Radius | `rounded-xl` (12px) |
| 최대 너비 | `max-w-4xl` (896px) |

**Tailwind 커스텀 설정 (index.html 인라인)**

```js
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: { primary: '#3B82F6' },
      fontFamily: { sans: ['Inter', 'Noto Sans KR', 'sans-serif'] },
    },
  },
}
```

---

## 개발 단계 (Phases)

### Phase 1 — 프로젝트 초기 세팅

- [ ] 폴더 구조 생성 (`css/`, `js/`, `assets/`)
- [ ] `index.html` 기본 뼈대 작성
- [ ] Tailwind CSS Play CDN 스크립트 삽입
- [ ] Google Fonts (Inter, Noto Sans KR) 연결
- [ ] Favicon 및 메타 태그 설정 (OG 태그 포함)
- [ ] Tailwind 커스텀 설정 인라인 정의

---

### Phase 2 — 섹션 마크업

#### 2-1. 네비게이션 바
- [ ] 로고 / 이름 텍스트
- [ ] 섹션 앵커 링크 목록
- [ ] 다크모드 토글 버튼
- [ ] 모바일 햄버거 메뉴

#### 2-2. 히어로 섹션 (`#hero`)
- [ ] 프로필 이미지 (원형, 테두리 효과)
- [ ] 이름 + 타이핑 효과 직함
- [ ] 한 줄 소개문
- [ ] 연락처 아이콘 링크 (이메일, GitHub, 블로그)
- [ ] CTA 버튼 ("이력서 보기" → #experience 스크롤)

#### 2-3. 자기소개 섹션 (`#about`)
- [ ] 자기소개 문단 (2~3줄)
- [ ] 핵심 강점 카드 3개 (아이콘 + 제목 + 설명)

#### 2-4. 기술 스택 섹션 (`#skills`)
- [ ] 카테고리 제목 + 기술 뱃지 (pill 형태)
- [ ] Frontend / Backend / Database / DevOps / Tools 분류

#### 2-5. 경력 섹션 (`#experience`)
- [ ] 세로 타임라인 레이아웃
- [ ] 회사명, 직함, 기간, 담당 업무 불릿 리스트

#### 2-6. 프로젝트 섹션 (`#projects`)
- [ ] 카드 그리드 (2열, 모바일 1열)
- [ ] 프로젝트명, 설명, 기술 태그, GitHub 링크 버튼

#### 2-7. 학력/자격증 섹션 (`#education`)
- [ ] 학력 아이템 (학교, 전공, 기간)
- [ ] 자격증 리스트

#### 2-8. 연락처 섹션 (`#contact`)
- [ ] 이메일 복사 버튼 (클립보드 API)
- [ ] 소셜 링크 아이콘 모음

#### 2-9. 푸터
- [ ] 저작권 표기
- [ ] 상단 이동 버튼 (Scroll to Top)

---

### Phase 3 — Tailwind CSS 스타일링

- [ ] 다크모드 (`dark:` 클래스) 전체 섹션 적용
- [ ] 반응형 레이아웃 (모바일 → 태블릿 → 데스크탑)
- [ ] 섹션 간 여백 및 타이포그래피 통일
- [ ] 카드 hover 효과 (`hover:shadow-lg`, `hover:-translate-y-1`)
- [ ] 그라디언트 배경 / 테두리 스타일 적용
- [ ] 커스텀 CSS (`style.css`) — 타임라인 세로선 등 Tailwind 미처리 스타일

---

### Phase 4 — JavaScript 인터랙션 (`main.js`)

- [ ] **다크모드 토글**: `localStorage`에 `theme` 저장, `<html>`에 `dark` 클래스 토글
- [ ] **스크롤 애니메이션**: `IntersectionObserver`로 섹션 진입 시 `fade-in` 적용
- [ ] **스크롤 스파이**: `scroll` 이벤트로 활성 섹션 감지 → nav 링크 `active` 클래스
- [ ] **타이핑 효과**: 직함 텍스트 배열 순환 출력
- [ ] **이메일 복사**: `navigator.clipboard.writeText()` + 토스트 메시지
- [ ] **상단 이동 버튼**: 스크롤 위치에 따라 버튼 표시/숨김
- [ ] **모바일 메뉴**: 햄버거 버튼 클릭 시 nav 토글

---

### Phase 5 — 최적화 및 접근성

- [ ] 이미지 최적화 (WebP 변환, `loading="lazy"`)
- [ ] 시맨틱 HTML 검토 (`<section>`, `<article>`, `<header>`, `<nav>`, `<footer>`)
- [ ] 접근성 (`alt` 텍스트, `aria-label`, 키보드 탐색, 포커스 스타일)
- [ ] Lighthouse 점수 확인 (성능 / 접근성 / SEO / Best Practices)
- [ ] 크로스 브라우저 테스트 (Chrome, Firefox, Safari, Edge)
- [ ] 모바일 실기기 테스트

---

### Phase 6 — 배포

- [ ] GitHub Repository 생성 및 코드 푸시
- [ ] GitHub Pages 또는 Netlify / Vercel 배포 설정
- [ ] 배포 URL 확인 및 공유
- [ ] (선택) 커스텀 도메인 연결

---

## 커밋 컨벤션

섹션 단위로 커밋을 분리한다.

```
feat: 프로젝트 초기 세팅 및 HTML 뼈대 구성
feat: 히어로 섹션 마크업 및 스타일 추가
feat: 기술 스택 섹션 뱃지 UI 구현
feat: 경력 타임라인 섹션 구현
feat: 프로젝트 카드 그리드 섹션 구현
feat: 학력/자격증 섹션 구현
feat: 연락처 섹션 및 푸터 구현
feat: 다크모드 토글 및 로컬스토리지 연동
feat: 스크롤 애니메이션 및 스크롤 스파이 구현
feat: 타이핑 효과 및 이메일 복사 기능 추가
fix: 모바일 반응형 레이아웃 수정
chore: 이미지 WebP 변환 및 최적화
```

---

## 로컬 개발 서버 실행

```bash
# Python 내장 서버
python -m http.server 3000

# Node.js live-server
npx live-server --port=3000
```

브라우저에서 `http://localhost:3000` 접속
