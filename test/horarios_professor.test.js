const { HorariosProfessor } = require("../src/horarios_professor");
const { BuscarProfessor } = require("../src/buscar_professor");

describe("Testando os horários dos professores", () => {
  // Criando um mock para a função soma
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

  it("Testando importação do json", () => {
    // Criando um mock para a função soma
    id = 2;
    // Chamando a função com os argumentos
    var resultado = buscarProfessor.getProfessor.getProfessor(id);

    // Verificando o resultado da função
    expect(resultado).toBe(cris);
  });

  it("Testando inexistente", () => {
    // Criando um mock para a função soma
    id = 5;
    // Chamando a função com os argumentos
    var resultado = buscarProfessor.getProfessor.getProfessor(id);

    // Verificando se o mock foi chamado corretamente
    expect(getProfessorMock).toHaveBeenCalledWith(id);

    // Verificando o resultado da função
    expect(resultado).toBe("Inexistente");
  });

  it("Testando nome do professor", () => {
    // Criando um mock para a função soma
    id = 2;
    // Chamando a função com os argumentos
    var resultado = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor(
      resultado.nomeDoProfessor,
      resultado.horarioDeAtendimento,
      resultado.periodo,
      resultado.sala
    );

    // Verificando o resultado da função
    expect(professor.nome).toBe(cris.nomeDoProfessor);
  });

  it("Testando horário do professor", () => {
    // Criando um mock para a função soma
    id = 2;
    // Chamando a função com os argumentos
    var resultado = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor(
      resultado.nomeDoProfessor,
      resultado.horarioDeAtendimento,
      resultado.periodo,
      resultado.sala
    );

    // Verificando o resultado da função
    expect(professor.horario).toBe(cris.horarioDeAtendimento);
  });

  it("Testando periodo do professor", () => {
    // Criando um mock para a função soma
    id = 2;
    // Chamando a função com os argumentos
    var resultado = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor(
      resultado.nomeDoProfessor,
      resultado.horarioDeAtendimento,
      resultado.periodo,
      resultado.sala
    );

    // Verificando o resultado da função
    expect(professor.periodo).toBe(cris.periodo);
  });

  it("Testando sala do professor", () => {
    // Criando um mock para a função soma
    id = 2;
    // Chamando a função com os argumentos
    var resultado = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor(
      resultado.nomeDoProfessor,
      resultado.horarioDeAtendimento,
      resultado.periodo,
      resultado.sala
    );

    // Verificando o resultado da função
    expect(professor.sala).toBe(cris.sala);
  });

  it("Testando nome do professor", () => {
    // Criando um mock para a função soma
    id = 2;
    // Chamando a função com os argumentos
    var resultado = buscarProfessor.getProfessor.getProfessor(id);

    var professor = new HorariosProfessor(
      resultado.nomeDoProfessor,
      resultado.horarioDeAtendimento,
      resultado.periodo,
      resultado.sala
    );

    // Verificando o resultado da função
    expect(professor.predio).toBe(cris.predio);
  });
});

function retornaPredio(sala) {
  if (sala < 0 || sala > 30) {
    return -1;
  }
  if (sala <= 5) {
    return 1;
  } else if (sala <= 10) {
    return 2;
  } else if (sala <= 15) {
    return 3;
  } else if (sala <= 20) {
    return 4;
  } else if (sala <= 25) {
    return 5;
  } else {
    return 6;
  }
}

function getProfessorByID(id) {
  if (id == 1) {
    return soned;
  } else if (id == 2) {
    return cris;
    // return '19:30'
  }
  if (id == 3) {
    return renzo;
  } else {
    return "Inexistente";
  }
}

const cris = {
  nomeDoProfessor: "Cris",
  horarioDeAtendimento: "15:30",
  periodo: "Integral",
  sala: "8",
  predio: ["1", "2", "3", "4", "5", "6"],
};

const renzo = {
  nomeDoProfessor: "Renzo",
  horarioDeAtendimento: "19:30",
  periodo: "Noturno",
  sala: "3",
  predio: ["1", "2", "3", "4", "5", "6"],
};

const soned = {
  nomeDoProfessor: "Soned",
  horarioDeAtendimento: "21:30",
  periodo: "Noturno",
  sala: "12",
  predio: ["1", "2", "3", "4", "5", "6"],
};
