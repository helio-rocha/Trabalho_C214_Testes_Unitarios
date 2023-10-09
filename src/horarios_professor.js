
class HorariosProfessor {

  addNome(nome) {
    if (typeof(nome) == 'string')
    {
      this.nome = nome;
    }
    else {
      return "Nome inválido"
    }
  }

  addHorario(horario) {
    var regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
    if (regex.test(horario)) {
      this.horario = horario
    }
    else {
      return "Horário inválido"
    }
  }

  addPeriodo(periodo) {
    if (periodo == 'Noturno' || periodo == "Integral")
    {
      this.periodo = periodo
    }
    else {
      return "Período inválido"
    }
  }

  addSala(sala) {
    if (sala > 0 && sala <= 30) {
      this.sala = sala
    }
    else {
      return "Sala inválida"
    }
  }

  addPredio(predios) {
    var predio_encontrado = this.descobrirPredio(this.sala)

    if (predios.includes(predio_encontrado)) {
      this.predio = predio_encontrado
    }
    else {
      return "Prédio inexistente"
    }
  }

  verificarHorarioAtendimento(){
    if (this.periodo == "Noturno") {
      if (horarioNoturno.includes(this.horario)){
        return "Horário e período são condizente"
      }
      else{
        return "Horário e período não são condizentes"
      }
    }
    else if (this.periodo == "Integral") {
      if (horarioIntegral.includes(this.horario)){
        return "Horário e período são condizente"
      }
      else{
        return "Horário e período não são condizentes"
      }
    }
    else {
      return "Horário e período não são condizentes"
    }
  }

  descobrirPredio(sala) {
    if (sala < 0 ) {
      return "-1"
    }
    else if (sala <= 5) {
      return "1"
    }
    else if (sala <= 10) {
      return "2"
    }
    else if (sala <= 15) {
      return "3"
    }
    else if (sala <= 20) {
      return "4"
    }
    else if (sala <= 25) {
      return "5"
    }
    else if (sala <= 30){
      return "6"
    }
    else {
      return "-1"
    }
  }
}


const horarioNoturno = [
  "19:30", "21:30"
]

const horarioIntegral = [
  "08:00", "10:00", "13:30", "15:30", "17:30"
]

module.exports = { HorariosProfessor };