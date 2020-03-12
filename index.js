console.log('Hello World');

//Árvore de natal em ASCII
const NUM_LINHAS =10;

for (let i = 0;i < NUM_LINHAS; i++){
    let espacos = ' '.repeat(NUM_LINHAS - i);
    let conteudo = 'x'.repeat(i);
    console.log(espacos + conteudo + 'x' + conteudo);
}

console.log((' '.repeat(NUM_LINHAS) + 'x' + '\n').repeat(4));