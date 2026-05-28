# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성

---

## 프로젝트 개요

개인 개발자 웹 이력서 프로젝트. 빌드 도구 없이 순수 HTML/CSS/JS + Tailwind CSS Play CDN으로 구성된 정적 사이트.

- **기술 스택**: HTML5, CSS3, Vanilla JavaScript (ES6+), Tailwind CSS v3
- **배포 대상**: GitHub Pages 또는 Netlify / Vercel
- **외부 의존성 최소화**: npm/번들러 없이 CDN만 사용

---

## 프로젝트 구조

```
resume/
├── index.html        # 단일 페이지 — 모든 섹션 포함
├── css/
│   └── style.css     # Tailwind로 처리되지 않는 커스텀 스타일 (애니메이션 등)
├── js/
│   └── main.js       # 인터랙션 전체 (다크모드, 스크롤, 타이핑 효과 등)
├── assets/
│   ├── profile.jpg   # 프로필 이미지 (WebP 권장)
│   └── icons/        # SVG 아이콘
└── ROADMAP.md
```

`index.html` 하나에 모든 섹션이 존재하는 SPA 구조이므로, JS 로직은 `main.js` 한 파일에서 관리한다.

---

## 개발 환경 실행

빌드 단계 없음. 브라우저에서 직접 열거나 간단한 로컬 서버 사용:

```bash
# Python 내장 서버 (Python 3)
python -m http.server 3000

# Node.js live-server (설치된 경우)
npx live-server --port=3000
```

Tailwind CSS는 Play CDN으로 로드하므로 별도 컴파일 불필요:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

---

## 페이지 섹션 구조

`index.html`은 아래 순서로 `<section>` 태그를 배치한다. 각 섹션에는 `id` 속성을 부여해 내비게이션 앵커로 사용한다.

| id | 내용 |
|----|------|
| `#hero` | 프로필 이미지, 이름, 직함, 타이핑 효과, 연락처 링크 |
| `#about` | 자기소개 문단, 핵심 강점 카드 3개 |
| `#skills` | 카테고리별 기술 뱃지 (pill) |
| `#experience` | 타임라인 형태의 경력 사항 |
| `#projects` | 프로젝트 카드 그리드 |
| `#education` | 학력 및 자격증 |
| `#contact` | 이메일 복사 버튼, 소셜 링크 |

---

## JavaScript 핵심 기능 (`main.js`)

- **다크모드 토글**: `localStorage`에 `theme` 키로 저장, `<html>` 태그에 `dark` 클래스 추가/제거
- **스크롤 애니메이션**: `IntersectionObserver`로 섹션 진입 시 `fade-in` 클래스 부여
- **스크롤 스파이**: `scroll` 이벤트로 활성 섹션 감지 후 nav 링크에 `active` 클래스 적용
- **타이핑 효과**: `#hero` 직함 텍스트를 배열로 관리하며 순환 출력
- **클립보드 복사**: `navigator.clipboard.writeText()`로 이메일 복사

---

## 디자인 토큰

Tailwind 설정은 `<script>` 블록으로 `index.html`에 인라인 정의:

```js
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',   // blue-500
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans KR', 'sans-serif'],
      },
    },
  },
}
```

| 항목 | 값 |
|------|-----|
| Primary | `#3B82F6` |
| Background Light | `#F9FAFB` |
| Background Dark | `#111827` |
| Border Radius | `rounded-xl` |
| 최대 너비 | `max-w-4xl` (896px) |

---

## 커밋 규칙

섹션 단위로 커밋을 분리한다:

```
feat: 히어로 섹션 마크업 및 스타일 추가
feat: 기술 스택 섹션 뱃지 UI 구현
feat: 다크모드 토글 및 로컬스토리지 연동
fix: 모바일 반응형 레이아웃 수정
chore: 이미지 WebP 변환 및 최적화
```

---

## 개발 단계 참고

전체 구현 계획 및 이력서 내용(샘플 데이터)은 `ROADMAP.md`를 참조한다.
