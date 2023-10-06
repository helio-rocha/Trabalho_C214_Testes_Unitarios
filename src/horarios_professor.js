var fs = require("fs");

export class HorariosProfessor {
  constructor(nome, horario, periodo, sala) {
    this.nome = nome;
    this.horario = horario;
    this.periodo = periodo;
    this.sala = sala;
    this.predio = this.descobrirPredio(sala)
  }

  descobrirPredio(sala){
    if (sala < 0 || sala > 30)
    {
        return -1
    }
    if (sala <= 5)
    {
        return 1
    }
    else if (sala <= 10)
    {
        return 2
    }
    else if (sala <= 15)
    {
        return 3
    }
    else if (sala <= 20)
    {
        return 4
    }
    else if (sala <= 25)
    {
        return 5
    }
    else
    {
        return 6
    }
  }
}