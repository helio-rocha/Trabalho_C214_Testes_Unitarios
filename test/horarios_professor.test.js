const { HorariosProfessor } = require("../src/horarios_professor");
const { BuscarProfessor } = require("../src/buscar_professor");

describe("Testando os horários dos professores", () => {
  let id;
  let getProfessorMock;
  let buscarProfessor;

  beforeEach(function () {
    getProfessorMock = jest.fn((id) => getProfessorByID(id));
    buscarProfessor = new BuscarProfessor();
    buscarProfessor.getProfessor.getProfessor = getProfessorMock;
  });

  afterEach(function () {
    expect(getProfessorMock).toHaveBeenCalledWith(id);
    buscarProfessor.getProfessor = jest.fn();
  });

  it("Testando importação do json 1f", () => {
    id = 2;
    
    var json = buscarProfessor.getProfessor.getProfessor(id);

    expect(json).toBe(cris);
  });

  // Testes felizes

  it("Testando nome do professor 2f", () => {
   
    id = 2;

    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    professor.addNome(json.nomeDoProfessor)

    expect(professor.nome).toBe(cris.nomeDoProfessor);
  });

  it("Testando horário do professor 3f", () => {
    id = 2;
    
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    professor.addHorario(json.horarioDeAtendimento)

    expect(professor.horario).toBe(cris.horarioDeAtendimento);
  });

  it("Testando periodo do professor 4f", () => {
    id = 2;
  
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    professor.addPeriodo(json.periodo)

    expect(professor.periodo).toBe(cris.periodo);
  });

  it("Testando sala do professor 5f", () => {
    id = 2;
    
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    professor.addSala(json.sala)

    expect(professor.sala).toBe(cris.sala);
  });

  it("Testando prédio do professor 6f", () => {
    id = 2;
  
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    professor.addSala(json.sala)
    professor.addPredio(json.predio)

    expect(cris.predio).toContain(professor.predio)
  });

  it("Verificação de formato de horário 7f", () => {
    id = 2;
    
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    professor.addHorario(json.horarioDeAtendimento)

    expect(professor.horario).toEqual(expect.stringMatching("^([01]?[0-9]|2[0-3]):[0-5][0-9]$"))
  });

  it("Testando período do professor 8f", () => {
    id = 2;
   
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    professor.addPeriodo(json.periodo)
    
    expect(periodos).toContain(professor.periodo)
  });

  it("Testando se o horário e o periodo são condizentes (integral) 9f", () => {
    id = 2;
   
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    professor.addPeriodo(json.periodo)
    professor.addHorario(json.horarioDeAtendimento)
    var resultado = professor.verificarHorarioAtendimento()
    
    expect(resultado).toBe("Horário e período são condizente")
  });

  it("Testando se o horário e o periodo são condizentes (noturno) 10f", () => {
    id = 1;
   
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    professor.addPeriodo(json.periodo)
    professor.addHorario(json.horarioDeAtendimento)
    var resultado = professor.verificarHorarioAtendimento()
    
    expect(resultado).toBe("Horário e período são condizente")
  });

  // Testes tristes

  it("Verificação de formato de horário inválido 1t", () => {
    id = 3;
    
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    var resultado = professor.addHorario(json.horarioDeAtendimento)

    expect(resultado).toBe('Horário inválido')
  });

  it("Verificação de sala inválida 2t", () => {
    id = 3;
    
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    var resultado = professor.addSala(json.sala)

    expect(resultado).toBe("Sala inválida")

  });

  it("Verificação de período inválido 3t", () => {
    id = 3;
    
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    var resultado = professor.addPeriodo(json.periodo)

    expect(resultado).toBe("Período inválido")

  });

  it("Verificação de prédio inexistente no vetor dos prédios disponívesis 4t", () => {
    id = 1;
    
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    var resultado = professor.addSala(json.sala)
    var resultado = professor.addPredio(json.predio)

    expect(resultado).toBe("Prédio inexistente")

  });

  it("Verificação de nome inválido 5t", () => {
    id = 4;
    
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    var resultado = professor.addNome(json.nomeDoProfessor)

    expect(resultado).toBe("Nome inválido")

  });

  it("Testando inexistente 6t", () => {
    id = 10;
   
    var json = buscarProfessor.getProfessor.getProfessor(id);

    expect(getProfessorMock).toHaveBeenCalledWith(id);

    expect(json).toBe("Inexistente");
  });

  it("Verificação de prédio inexistente quando a sala for negativa 7t", () => {
    id = 4;
    
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    professor.addSala(json.sala)
    var resultado = professor.addPredio(json.predio)

    expect(resultado).toBe("Prédio inexistente")

  });

  it("Testando se o horário e o periodo não são condizentes (horário integral e periodo noturno) 8t", () => {
    id = 4;
   
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    professor.addPeriodo(json.periodo)
    professor.addHorario(json.horarioDeAtendimento)
    var resultado = professor.verificarHorarioAtendimento()
    
    expect(resultado).toBe("Horário e período não são condizentes")
  });

  it("Testando se o horário e o periodo não são condizentes (horário noturno e periodo integral) 9t", () => {
    id = 5;
   
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    professor.addPeriodo(json.periodo)
    professor.addHorario(json.horarioDeAtendimento)
    var resultado = professor.verificarHorarioAtendimento()
    
    expect(resultado).toBe("Horário e período não são condizentes")
  });

  it("Testando se o horário e o periodo não são condizentes 10t", () => {
    id = 3;
   
    var json = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor();

    professor.addPeriodo(json.periodo)
    professor.addHorario(json.horarioDeAtendimento)
    var resultado = professor.verificarHorarioAtendimento()
    
    expect(resultado).toBe("Horário e período não são condizentes")
  });

});

function getProfessorByID(id) {
  if (id == 1) {
    return soned;
  } else if (id == 2) {
    return cris;
  }
  if (id == 3) {
    return renzo;
  } 
  if (id == 4) {
    return yvo
  }
  if (id == 5){
    return vitor
  }
  else {
    return "Inexistente";
  }
}

const soned = {
  nomeDoProfessor: "Soned",
  horarioDeAtendimento: "21:30",
  periodo: "Noturno",
  sala: "12",
  predio: ["1", "2", "4", "5", "6"],
};

const cris = {
  nomeDoProfessor: "Cris",
  horarioDeAtendimento: "15:30",
  periodo: "Integral",
  sala: "8",
  predio: ["1", "2", "3", "4", "5", "6"],
};

const renzo = {
  nomeDoProfessor: "Renzo",
  horarioDeAtendimento: "xx:30",
  periodo: "adasda",
  sala: "50",
  predio: ["1", "2", "3", "4", "5", "6"],
};

const yvo = {
  nomeDoProfessor: 66,
  horarioDeAtendimento: "17:30",
  periodo: "Noturno",
  sala: "-5",
  predio: ["1", "2", "3", "4", "5", "6"],
};

const vitor = {
  nomeDoProfessor: 'Vitor',
  horarioDeAtendimento: "21:30",
  periodo: "Integral",
  sala: "20",
  predio: ["1", "2", "3", "4", "5", "6"],
};

const periodos = [
  "Integral", "Noturno"
]
