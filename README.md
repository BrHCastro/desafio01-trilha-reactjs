# Desafio 01 - Conceitos do React.

# 💻 Sobre o desafio

Nesse desafio, você deverá criar uma aplicação para treinar o que aprendeu até agora no ReactJS

Essa será uma aplicação onde o seu principal objetivo é uma pequena aplicação de atividades a fazer, para treinar um pouco mais sobre manipulação do estado no React.

- Adicionar uma nova tarefa
- Remover uma tarefa
- Marcar e desmarcar uma tarefa como concluída

Você deve criar as funcionalidades para as três funções presentes nesse arquivo, que são:

- [x] **handleCreateNewTask**: Deve ser possível adicionar uma nova task no estado de `tasks`, com os campos `id` que deve ser gerado de forma aleatória, `title` que deve ser um texto e `isComplete` que deve iniciar como false.
- [x] **handleToggleTaskCompletion:** Deve alterar o status de `isComplete` para uma task com um ID específico que é recebido por parâmetro.
- [x] **handleRemoveTask:** Deve receber um ID por parâmetro e remover a task que contém esse ID do estado.

## Especificação dos testes

Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.

Resultado dos testes:

```bash
  PASS  src/__tests__/components/TaskList.spec.tsx
  App Page
    ✓ should be able to add a task (392 ms)
    ✓ should not be able to add a task with a empty title (92 ms)
    ✓ should be able to remove a task (120 ms)
    ✓ should be able to check a task (58 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        4.118 s
Ran all test suites.

Watch Usage: Press w to show more.
```
