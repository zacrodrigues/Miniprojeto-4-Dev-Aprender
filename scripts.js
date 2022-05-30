// Executa a função para verificar a velocidade
verificarVelocidade(130)

// Verifica se a velocidade está dentro do limite
function verificarVelocidade(velocidade) {
    
    // Define a velocidade máxima
    const speedMax = 70
    
    if (velocidade <= speedMax) {
        // Se a velocidade for menor que a máxima
        console.log('Ok!')
    } else if (velocidade > speedMax) {
        // Se a velocidade for maior que a máxima permitida

        // Calcula o quanto passou da velocidade máxima e calcula os pontos
        // A cada 5 km/h a mais do permitido, é 1 ponto na carteira
        const speedExcess = Math.floor((velocidade - speedMax) / 5)
        
        if (speedExcess === 1) {
            // Se a velocidade ultrapassar somente 5km/h
            console.log(`${speedExcess} ponto!`)
        } else if (speedExcess < 12) {
            // Se a velocidade ultrapassada somar até 12 pontos
            console.log(`${speedExcess} pontos!`)
        } else {
            // Se a velocidade ultrapassada for igual ou maior que 12 pontos
            console.log('Carteira Suspendida!')
        }
    }
}