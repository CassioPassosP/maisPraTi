//Aula 6

//calculo para converter em celsius
// let C = 0
// let F = 68

// let resultado = ((5 / 9 )* (F-32))

// console.log(resultado)

//calculo para converter em fahrenheit 
// let C = 25
// let F = 0

// let resultado = (( 9 / 5 * C)+32)

// console.log(resultado)

//ex 3
// let eleitores = 100
// let votosBrancos = 4
// let votosNulos = 30
// let votosValidos = 70

// let percentualVotosEmBranco = votosBrancos / eleitores * 100
// let percentualVotosNulos = votosNulos / eleitores * 100
// let percentualVotosValidos = votosValidos / eleitores * 100

// console.log(`O percentual de votos em branco e ${votosBrancos}% `)
// console.log(`O percentual de votos nulos e ${votosNulos}%`)
// console.log(`O percentual de votos validos e ${votosValidos}%`)

//ex4

// let turmaC = 60
// let turmaD = 20
// let totalAlunos = turmaC + turmaD

// let percentualReprovadosTurmaC = 10
// let percentualAprovadosTurmaD = 85
// let percentualAprovadosTotal = percentualAprovadosTurmaD + 50

// let quantidadeAlunosReprovadosTurmaC = (percentualReprovadosTurmaC*60)/100
// let quantidadeAlunosAprovadosTurmaD = (percentualAprovadosTurmaD*20)/100
// let quantidadeAlunosAprovadosTotais = (percentualAprovadosTotal*totalAlunos)/100

// console.log(`a quantidade de alunos reprovados na turma C = ${quantidadeAlunosReprovadosTurmaC}`)
// console.log(`a quantidade de alunos reprovados na turma D = ${quantidadeAlunosAprovadosTurmaD}`)
// console.log(`a quantidade de alunos totais Aprovados = ${quantidadeAlunosAprovadosTotais}`)



//ex5

let DiaSemana ='cr7'

switch(DiaSemana){
    case 'Sabado':-
        console.log('Final de semana')
    break
    case 'Domingo':
        console.log('Final de semana')
    break
    default:
        console.log('Dia Util')  
    break
}