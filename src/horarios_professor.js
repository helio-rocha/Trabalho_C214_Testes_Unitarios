
class HorariosProfessor {
  constructor(nome, horario, periodo, sala) {
    this.nome = nome;
    this.horario = horario;
    this.periodo = periodo;
    this.sala = sala;
    // this.predio = predio;
  }

  addHorario(json) {
    this.horario = json.getHorario(this.nome)
  }

  addPeriodo(json) {
    this.periodo = json.getPeriodo(this.nome)
  }

  addSala(json) {
    this.sala = json.getSala(this.nome)
  }

  addPredio(json) {
    this.predio = descobrirPredio(this.sala)
  }

  getNome() {
    return this.nome;
  }

  getHorario() {
    return this.horario;
  }

  getPeriodo() {
    return this.periodo;
  }

  getSala() {
    return this.sala;
  }

  descobrirPredio(sala) {
    if (sala < 0 || sala > 30) {
      return -1
    }
    if (sala <= 5) {
      return 1
    }
    else if (sala <= 10) {
      return 2
    }
    else if (sala <= 15) {
      return 3
    }
    else if (sala <= 20) {
      return 4
    }
    else if (sala <= 25) {
      return 5
    }
    else {
      return 6
    }
  }
}

module.exports = { HorariosProfessor };