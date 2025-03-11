facultad_unico('ingenieria').
facultad_unico('ciencias').
facultad_unico('ciencias sociales').
facultad_unico('ciencias de la salud').

% ingenieria
carrera('civil').
carrera('ciencias y sistemas').
carrera('industrial').

% ciencias
carrera('matematicas').
carrera('quimica').
carrera('biologia').

% ciencias sociales
carrera('economicas').
carrera('derecho').
carrera('ciencias politicas').

% ciencias de la salud
carrera('medicina').
carrera('odontologia').
carrera('nutricion').

% CONECTAR FACULTAD 
facultad('ingenieria','civil').
facultad('ingenieria','ciencias y sistemas').
facultad('ingenieria','industrial').

facultad('ciencias','matematicas').
facultad('ciencias','quimica').
facultad('ciencias','biologia').

facultad('ciencias sociales','economicas').
facultad('ciencias sociales','derecho').
facultad('ciencias sociales','ciencias politicas').

facultad('ciencias de la salud','medicina').
facultad('ciencias de la salud','odontologia').
facultad('ciencias de la salud','nutricion').

aptitud_unico('matematicas').
aptitud_unico('resolucion de problemas').
aptitud_unico('liderasgo').
aptitud_unico('pensamiento critico').
aptitud_unico('comunicacion oral y escrita').
aptitud_unico('creatividad').
aptitud_unico('trabajo en equipo').

% APTITUD PARA CADA carrera de cada facultad
aptitud('matematicas','matematicas').
aptitud('resolucion de problemas','matematicas').
aptitud('resolucion de problemas','quimica').
aptitud('resolucion de problemas','biologia').

aptitud('matematicas','civil').
aptitud('resolucion de problemas','civil').
aptitud('matematicas','ciencias y sistemas').
aptitud('resolucion de problemas','ciencias y sistemas').
aptitud('liderasgo','industrial').
aptitud('resolucion de problemas','industrial').

aptitud('pensamiento critico','economicas').
aptitud('resolucion de problemas','economicas').
aptitud('comunicacion oral y escrita','derecho').
aptitud('liderasgo','derecho').
aptitud('pensamiento critico','derecho').
aptitud('liderasgo','ciencias politicas').
aptitud('comunicacion oral y escrita','ciencias politicas').
aptitud('pensamiento critico','ciencias politicas').

aptitud('trabajo en equipo','medicina').
aptitud('resolucion de problemas','medicina').
aptitud('resolucion de problemas','odontologia').
aptitud('resolucion de problemas','nutricion').

habilidad_unica('Analisis de datos').
habilidad_unica('programacion').
habilidad_unica('investigacion cientifica').
habilidad_unica('manejo de herramientas manuales').
habilidad_unica('redaccion').
habilidad_unica('negociacion').
habilidad_unica('edicion de audio/video').
habilidad_unica('gestion de proyectos').
habilidad_unica('diseño grafico').
habilidad_unica('investigacion').

habilidad('Analisis de datos','matematicas').
habilidad('programacion','matematicas').
habilidad('investigacion cientifica','quimica').
habilidad('investigacion cientifica','biologia').

habilidad('manejo de herramientas manuales','civil').
habilidad('programacion','ciencias y sistemas').
habilidad('Analisis de datos','ciencias y sistemas').
habilidad('Analisis de datos','industrial').

habilidad('Analisis de datos','economicas').
habilidad('redaccion','economicas').
habilidad('redaccion','derecho').
habilidad('negociacion','derecho').
habilidad('redaccion','ciencias politicas').
habilidad('investigacion','ciencias politicas').

habilidad('investigacion cientifica','medicina').
habilidad('manejo de herramientas manuales','odontologia').
habilidad('investigacion cientifica','nutricion').

% intereses
interes_unico('ciencias exactas').
interes_unico('ciencias naturales').
interes_unico('tecnologia').
interes_unico('ciencias sociales').
interes_unico('economia').
interes_unico('derecho').
interes_unico('politica').
interes_unico('comunicacion').
interes_unico('administracion').
interes_unico('arte y diseno').
interes_unico('humanidades').

interes('ciencias exactas','matematicas').
interes('ciencias exactas','quimica').
interes('ciencias naturales','quimica').
interes('ciencias naturales','biologia').

interes('ciencias exactas','civil').
interes('tecnologia','ciencias y sistemas').
interes('ciencias exactas','industrial').
interes('tecnologia','industrial').

interes('ciencias sociales','economicas').
interes('economia','economicas').
interes('ciencias sociales','derecho').
interes('derecho','derecho').
interes('ciencias sociales','ciencias politicas').
interes('politica','ciencias politicas').

interes('ciencias naturales','medicina').
interes('ciencias naturales','odontologia').
interes('ciencias naturales','nutricion').

pregunta(p1,'en que tipo de entorno laboral se sentiria mas comodo').
pregunta(p2,'prefieres un enfoque de aplicacion practica o la investigacion teorica').
pregunta(p3,'prefieres trabajar con reglas claras o en un entorno que fomenta la creatividad').
pregunta(p4,'te gustaria trabajar en un entorno global o multicultural').

respuesta(p1,'trabajo individual').
respuesta(p1,'trabajo en equipo').
respuesta(p2,'enfoque teorico').
respuesta(p2,'enfoque practico').
respuesta(p3,'ambiente estructurado').
respuesta(p3,'ambiente creativo').
respuesta(p4,'ambiente internacional').
respuesta(p4,'ambiente local').

preferencia('ambiente estructurado','civil').
preferencia('enfoque practico','civil').
preferencia('trabajo en equipo','civil').
preferencia('ambiente estructurado','ciencias y sistemas').
preferencia('enfoque practico','ciencias y sistemas').
preferencia('trabajo en equipo','ciencias y sistemas').
preferencia('ambiente estructurado','industrial').
preferencia('enfoque practico','industrial').
preferencia('trabajo en equipo','industrial').

preferencia('ambiente estructurado','matematicas').
preferencia('enfoque teorico','matematicas').
preferencia('trabajo individual','matematicas').
preferencia('ambiente estructurado','quimica').
preferencia('enfoque teorico','quimica').
preferencia('trabajo en equipo','quimica').
preferencia('ambiente estructurado','biologia').
preferencia('enfoque practico','biologia').
preferencia('trabajo en equipo','biologia').

preferencia('ambiente estructurado','economicas').
preferencia('enfoque practico','economicas').
preferencia('trabajo en equipo','economicas').
preferencia('ambiente estructurado','derecho').
preferencia('enfoque practico','derecho').
preferencia('trabajo en equipo','derecho').
preferencia('ambiente internacional','ciencias politicas').
preferencia('enfoque teorico','ciencias politicas').
preferencia('trabajo en equipo','ciencias politicas').

preferencia('ambiente estructurado','medicina').
preferencia('enfoque practico','medicina').
preferencia('trabajo en equipo','medicina').
preferencia('ambiente estructurado','odontologia').
preferencia('enfoque practico','odontologia').
preferencia('trabajo en equipo','odontologia').
preferencia('ambiente estructurado','nutricion').
preferencia('enfoque practico','nutricion').
preferencia('trabajo en equipo','nutricion').



limitar_decimales(N, Decimales, Redondeado) :-
    Factor is 10^Decimales,           % Crear el factor para mover el punto decimal
    Temp is N * Factor,               % Multiplicar el número por el factor
    RedondeadoTemp is round(Temp),    % Redondear el número
    Redondeado is RedondeadoTemp / Factor.  % Dividir por el factor para devolver el punto decimal a su lugar original

% Puntaje por aptitudes (FUNCIONA)
puntaje_aptitudes(Carrera, Puntaje) :-
    aptitudes_usuario(Aptitudes),
    contar_coincidencias_aptitudes(Aptitudes, Carrera, Coincidencias, TotalAptitudes),
    ( TotalAptitudes =:= 0 -> Puntaje = 0
    ; PuntajeSinLimitar is (Coincidencias / TotalAptitudes) * 100,
      limitar_decimales(PuntajeSinLimitar, 2, Puntaje)
    ).

% Contar Total de caracteristica (recursivo)
contar_coincidencias_aptitudes([], _, 0, 0).
contar_coincidencias_aptitudes([Aptitud | Resto], Carrera, Coincidencias, TotalAptitudes) :-
    contar_coincidencias_aptitudes(Resto, Carrera, CoincidenciasResto, TotalAptitudesResto),
    (aptitud(Aptitud, Carrera) -> Coincidencias is CoincidenciasResto + 1; Coincidencias is CoincidenciasResto),
    TotalAptitudes is TotalAptitudesResto + 1.


% Puntaje de habilidades (FUNCIONA)
puntaje_habilidades(Carrera, Puntaje) :-
    habilidades_usuario(Habilidades),
    contar_coincidencias_habilidades(Habilidades, Carrera, Coincidencias, TotalHabilidades),
    ( TotalHabilidades =:= 0 -> Puntaje = 0
    ; PuntajeSinLimitar is (Coincidencias / TotalHabilidades) * 100,
      limitar_decimales(PuntajeSinLimitar, 2, Puntaje)
    ).

% Contar coincidencias y total de habilidades (recursivo)
contar_coincidencias_habilidades([], _, 0, 0).
contar_coincidencias_habilidades([Habilidad | Resto], Carrera, Coincidencias, TotalHabilidades) :-
    contar_coincidencias_habilidades(Resto, Carrera, CoincidenciasResto, TotalHabilidadesResto),
    (habilidad(Habilidad, Carrera) -> Coincidencias is CoincidenciasResto + 1; Coincidencias is CoincidenciasResto),
    TotalHabilidades is TotalHabilidadesResto + 1.

% Puntaje de intereses (todo en una función)
puntaje_intereses(Carrera, Puntaje) :-
    intereses_usuario(Intereses),
    sumar_porcentajes_intereses(Intereses, Carrera, Puntaje).

% Sumar porcentajes de intereses (recursivo)
sumar_porcentajes_intereses([], _, 0).
sumar_porcentajes_intereses([(Interes, Porcentaje) | Resto], Carrera, Suma) :-
    sumar_porcentajes_intereses(Resto, Carrera, SumaResto),
    (interes(Interes, Carrera) -> Suma is SumaResto + Porcentaje; Suma is SumaResto).

% Puntaje de preferencias (todo en una función)
puntaje_preferencias(Carrera, Puntaje) :-
    preferencias_usuario(Preferencias),
    contar_coincidencias_preferencias(Preferencias, Carrera, Coincidencias, TotalPreferencias),
    ( TotalPreferencias =:= 0 -> Puntaje = 0
    ; Coincidencias =:= 0 -> Puntaje = 0
    ; PuntajeSinLimitar is (Coincidencias / TotalPreferencias) * 100,
    limitar_decimales(PuntajeSinLimitar, 2, Puntaje)
    ).

% Contar coincidencias y total de preferencias (recursivo)
contar_coincidencias_preferencias([], _, 0, 0).
contar_coincidencias_preferencias([(PreferenciaID, Respuesta) | Resto], Carrera, Coincidencias, TotalPreferencias) :-
    contar_coincidencias_preferencias(Resto, Carrera, CoincidenciasResto, TotalPreferenciasResto),
    ((respuesta(PreferenciaID, Respuesta), preferencia(Respuesta, Carrera)) ->
        Coincidencias is CoincidenciasResto + 1;
        Coincidencias is CoincidenciasResto
    ),
    TotalPreferencias is TotalPreferenciasResto + 1.

% Puntaje total de una carrera (recursivo)
puntaje_total(Carrera, PuntajeTotal) :-
    (puntaje_aptitudes(Carrera, PuntajeAptitudes) -> true ; PuntajeAptitudes = 0),
    (puntaje_habilidades(Carrera, PuntajeHabilidades) -> true ; PuntajeHabilidades = 0),
    (puntaje_intereses(Carrera, PuntajeIntereses) -> true ; PuntajeIntereses = 0),
    (puntaje_preferencias(Carrera, PuntajePreferencias) -> true ; PuntajePreferencias = 0),
    PuntajeSinLimitar is (PuntajeAptitudes + PuntajeHabilidades + PuntajeIntereses + PuntajePreferencias) / 4,
    limitar_decimales(PuntajeSinLimitar, 2, PuntajeTotal).

% Puntaje total de una facultad (todo en una función)
puntaje_facultad(Facultad, PuntajeTotal) :-
    findall(Carrera, facultad(Facultad, Carrera), Carreras),
    findall(Puntaje, (facultad(Facultad, Carrera), puntaje_total(Carrera, Puntaje)), PuntajesCarreras),
    sumar_puntajes_carreras(PuntajesCarreras, PuntajeSinLimitar),
    limitar_decimales(PuntajeSinLimitar, 2, PuntajeTotal).

% Sumar los puntajes de las carreras (recursivo)
sumar_puntajes_carreras([], 0).
sumar_puntajes_carreras([Puntaje | Resto], SumaTotal) :-
    sumar_puntajes_carreras(Resto, SumaParcial),
    SumaTotal is SumaParcial + Puntaje.

% ENCONTRAR LA LISTA DE FACULTADES
obtener_lista_facultades(Facul, LF) :-
    findall(Fac, facultad_unico(Fac), Facul),
    findall(Puntaje, (facultad_unico(Facu), puntaje_facultad(Facu, Puntaje)), LF).

% OBTENER LISTA DE CARRERAS
obtener_lista_carreras(Facult, LC) :-
    findall(Puntaje, (facultad(Facult, Carr), puntaje_total(Carr, Puntaje)), LC).
