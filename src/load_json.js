import { HorariosProfessor } from "./horarios_professor";

export class LoadJson {
    constructor() {}
  
    consultar(nome) {
      fs.readFile("src\\" + nome + ".json", "utf8", function (err, data) {
        console.log(data);
        var json = JSON.parse(data)
        var professor = new HorariosProfessor(json.nomeDoProfessor, json.horarioDeAtendimento, json.periodo, json.sala)
        console.log(professor);
      });
    }
  }