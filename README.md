# Chá de Casa Nova 
### Halison Patrick Xavier

## Descrição
Aplicação que armazena uma lista composta de duas sublistas, uma de presentes e uma de amigos, onde é possível armazenar dados para um "Chá de casa nova"
espécie de evento para arrecadar presentes após uma mudança.


## Estrutura da aplicação: *

```
+-- components
|   +-- bar     // Barra de título com ícone de _toggle_ do Menu
|   +-- common      // Componentes padrão: Botões e Campos de texto
|   +-- layout      // Estrutura de layout padrão utilizada por todas as telas
|
+-- context     // estrutura utilizando a context API do React para manipular dados globalmente nos lugares da aplicação que fazem uso dela
|
+-- helpers     // Funções helpers: apenas um gerador de id único foi implementado
|
+-- pages
|   +-- empty   // Página exibida quando não houver dados cadastrados
|   +-- list    // Página da Lista
|   +-- newFriend   // Página para cadastro de amigos
|   +-- newGift     // Página para cadastro de presentes
|
+-- storage     // Módulo de manipulação do storage contendo métodos de gravação e recuperação
```

- [x] A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente?
- [x] A aplicação tem pelo menos duas interfaces (telas) independentes?
- [x] A aplicação armazena e usa de forma relevante dados complexos do usuário?
- [x] A aplicação tem pelo menos dois componentes além do componente principal?
- [x] A aplicação tem um componente com rolagem?
- [x] A aplicação tem um campo de formulário que é devidamente tratado?
- [x] A aplicação foi desenvolvida com o React Native?
- [ ] O código da minha aplicação possui comentários explicando cada operação?
    - Foquei os meus esforços em terminar a aplicação antes de comentar o código, mas não consegui.
- [x] A aplicação está funcionando corretamente?
- [ ] A aplicação está completa?
    - O método de edição de itens da lista e o método de compartilhamento da lista não foram concluídos
