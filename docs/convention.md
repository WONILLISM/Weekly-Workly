# Issue Convention

이슈제목: 타입 제목
ex) Feat 수정 버튼 추가

# Branch Convention

- main: 큰 기능이 추가되는 브랜치
- dev: 서브 브랜치가 통합되는 브랜치
- 서브 브랜치: 이슈번호-이슈제목

# Commit Convention

## 제목

깃모지 타입 제목 (#이슈번호)
ex) ✨ Feat 버튼 색상 변경 (#99)
ex) ✨ Feat 로그인 버튼 색상 변경 (#152)

## 내용

```
- 무엇을
- 왜

```

추후 적용: https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue

## Commit type list

| 타입     | 깃모지 |
| -------- | ------ |
| Bug      | 🐛     |
| Chore    | 🔧     |
| Docs     | 📝     |
| Remove   | 🔥     |
| Feat     | ✨     |
| Refactor | ♻️     |
| Style    | 💄     |
| Test     | 🧪     |
| Working  | 🚧     |

# PR Convention

## 내용

어떤 수정 사항이 생겼는지 내용에 리스트로 작성해야 합니다.

ex)

- 왼쪽 버튼 오른쪽으로 변경
- 버튼 색상 빨간색에서 파란색으로 변경
- 로그 추가

## 규칙

코드리뷰 후 댓글 작성 필수입니다.
