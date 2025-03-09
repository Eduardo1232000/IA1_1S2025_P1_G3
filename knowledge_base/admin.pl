% Facultades -> facultad_unico
facultad_unico('ingenieria').
facultad_unico('medicina').

% Carreras
carrera('ciencias y sistemas').
carrera('civil').
carrera('electronica').
carrera('industrial').
carrera('economicas').
carrera('derecho').
carrera('matematicas').
carrera('quimica').
carrera('biologia').
carrera('ciencias politicas').
carrera('odontologia').
carrera('nutricion').
carrera('mecanica').
carrera('comunicacion').
carrera('administracion').

% Aptitudes -> aptitud_unico
aptitud_unico('pensamiento_logico').
aptitud_unico('analisis_cuantitativo').
aptitud_unico('creatividad').
aptitud_unico('conocimientos_en_matematicas').
aptitud_unico('trabajo_en_equipo').
aptitud_unico('resolucion_de_problemas').
aptitud_unico('atencion_al_detalle').
aptitud_unico('pensamiento_critico').
aptitud_unico('conocimientos_en_programacion').
aptitud_unico('capacidad_para_aprender_rapidamente').
aptitud_unico('habilidades_comunicativas').
aptitud_unico('conocimientos_en_fisica').
aptitud_unico('modelado_y_simulacion').


% Cursos
curso_unico('programacion_1').
curso_unico('estructuras_de_datos').
curso_unico('resistencia_de_materiales').
curso_unico('dibujo_tecnico').
curso_unico('circuitos_electricos').
curso_unico('electronica_digital').

% Dias esto quemado en el front
dia('lunes').
dia('martes').
dia('miercoles').
dia('jueves').
dia('viernes').
dia('sabado').

% Horas disponibles esto quemado en el front
hora('08:00').
hora('10:00').
hora('12:00').
hora('14:00').
hora('16:00').
hora('18:00').

% Asociacion de facultades con carreras

% Facultades - Carreras  -> facultad 
facultad('ingenieria', 'ciencias y sistemas').
facultad('ingenieria', 'civil').
facultad('ingenieria', 'electronica').
facultad('ingenieria', 'industrial').
facultad('ingenieria', 'mecanica').
facultad('ingenieria', 'quimica').

% Asociacion de aptitudes con carreras

% Ingenieria - Ciencias de Sistemas -> aptitud -> primero la aptitud y luego la carrera

aptitud('pensamiento_logico', 'ciencias y sistemas').
aptitud('analisis_cuantitativo','ciencias y sistemas').
aptitud('conocimientos_en_programacion','ciencias y sistemas').
aptitud('trabajo_en_equipo','ciencias y sistemas').
aptitud('resolucion_de_problemas','ciencias y sistemas').
aptitud('habilidades_comunicativas','ciencias y sistemas').

% Ingenieria - Civil -> primero la aptitud y luego la carrera
aptitud('creatividad','civil').
aptitud('trabajo_en_equipo','civil').
aptitud('resolucion_de_problemas','civil').
aptitud('atencion_al_detalle','civil').
aptitud('conocimientos_en_fisica','civil').
aptitud('habilidades_comunicativas','civil').

% Ingenieria - Electronica -> primero la aptitud y luego la carrera
aptitud('pensamiento_logico','electronica').
aptitud('analisis_cuantitativo','electronica').
aptitud('modelado_y_simulacion','electronica').
aptitud('trabajo_en_equipo','electronica').
aptitud('resolucion_de_problemas','electronica').

% habilidades

habilidad_unica('Analisis de datos').
habilidad_unica('programacion').
habilidad_unica('investigacion cientifica').
habilidad_unica('manejo de herramientas manuales').
habilidad_unica('redaccion').
habilidad_unica('negociacion').
habilidad_unica('edicion de audio/video').
habilidad_unica('gestion de proyectos').
habilidad_unica('diseño grafico').

% habilidades -> carrera
habilidad('Analisis de datos','matematicas').
habilidad('programacion','matematicas').
habilidad('investigacion cientifica','quimica').
habilidad('investigacion cientifica','biologia').

habilidad('manejo de herramientas manuales','civil').
habilidad('programacion','ciencias y sistemas').
habilidad('Analisis de datos','ciencias y sistemas').
habilidad('Analisis de datos','industrial').

habilidad('Analisis de datos','economicas').
habilidad('redaccion','comunicacion').
habilidad('redaccion','derecho').
habilidad('negociacion','administracion').
habilidad('redaccion','ciencias politicas').
habilidad('investigacion cientifica','ciencias politicas').

habilidad('investigacion cientifica','medicina').
habilidad('manejo de herramientas manuales','odontologia').
habilidad('investigacion cientifica','nutricion').

% es
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

% interes -> carrera
interes('ciencias exactas','matematicas').
interes('ciencias exactas','quimica').
interes('ciencias naturales','quimica').
interes('ciencias naturales','biologia').

interes('ciencias exactas','civil').
interes('tecnologia','electronica').
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

% preguntas

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

preferencia_unica('ambiente estructurado').
preferencia_unica('enfoque practico').
preferencia_unica('trabajo en equipo').
preferencia_unica('enfoque teorico').
preferencia_unica('trabajo individual').


preferencia('ambiente estructurado','electronica').
preferencia('enfoque practico','electronica').
preferencia('trabajo en equipo','electronica').
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
preferencia('ambiente internacional','economicas').
preferencia('enfoque teorico','ciencias politicas').
preferencia('trabajo en equipo','administracion').

preferencia('ambiente estructurado','medicina').
preferencia('enfoque practico','medicina').
preferencia('trabajo en equipo','medicina').
preferencia('ambiente estructurado','odontologia').
preferencia('enfoque practico','odontologia').
preferencia('trabajo en equipo','odontologia').
preferencia('ambiente estructurado','nutricion').
preferencia('enfoque practico','nutricion').
preferencia('trabajo en equipo','nutricion').


% Asociar Carreras y Cursos -> primero es curso y luego carrera
curso('programacion_1','ciencias y sistemas').
curso('estructuras_de_datos','ciencias y sistemas').
curso('resistencia_de_materiales', 'industrial').
curso('dibujo_tecnico','civil').
curso('circuitos_electricos','electronica').
curso('electronica_digital','electronica').

% seccion
seccion_unico('A').
seccion_unico('B').
seccion_unico('C').
seccion_unico('D').
seccion_unico('E').

seccion('A','programacion_1').
seccion('B','programacion_1').
seccion('A','circuitos_electricos').
seccion('A','electronica_digital').
seccion('E','circuitos_electricos').
seccion('E','dibujo_tecnico').

% horario(dia, hora inicio, hora fin, seccion, carrera). y quemados en el front

horario('lunes', '08:00', '10:00', 'A','programacion_1').
horario('miercoles', '10:00', '12:00', 'A','circuitos_electricos').
horario('martes', '14:00', '16:00', 'A','circuitos_electricos').
horario('jueves', '16:00', '18:00', 'E','dibujo_tecnico').
horario('viernes', '08:00', '10:00', 'B','programacion_1').
horario('sabado', '10:00', '12:00', 'B','programacion_1').

limitar_decimales(N, Decimales, Redondeado) :-
    Factor is 10^Decimales,           % Crear el factor para mover el punto decimal
    Temp is N * Factor,               % Multiplicar el numero por el factor
    RedondeadoTemp is round(Temp),    % Redondear el numero
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
    (aptitud(Aptitud, Carrera) -> Coincidencias is CoincidenciasResto + 1 ; Coincidencias is CoincidenciasResto),
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

% Puntaje de intereses (todo en una funcion)
puntaje_intereses(Carrera, Puntaje) :-
    intereses_usuario(Intereses),
    sumar_porcentajes_intereses(Intereses, Carrera, Puntaje).

% Sumar porcentajes de intereses (recursivo)
sumar_porcentajes_intereses([], _, 0).
sumar_porcentajes_intereses([(Interes, Porcentaje) | Resto], Carrera, Suma) :-
    sumar_porcentajes_intereses(Resto, Carrera, SumaResto),
    (interes(Interes, Carrera) -> Suma is SumaResto + Porcentaje; Suma is SumaResto).

% Puntaje de preferencias (todo en una funcion)
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

% Puntaje total de una facultad (todo en una funcion)
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




% asociaciones a curso -> seccion y curso
% asociar horario



% colocar una nueva vista para la parte de cursos y horarios
% todas las modificaciones (eliminacion, edicion) se descargan en un nuevo archivo de reglas diferente al archivo cargado original


% otra pestaña para gestionar aptitudes, habilidades e intereses



% agregar habilidad_unica y es para la lista (select) -> habilidad_unica('Analisis de datos').
% agregar habilidad y es para la lista (select) -> habilidad('Analisis de datos','matematicas'). -> habilidad con carrera

% agregar interes_unico y es para la lista (select) -> interes_unico('ciencias exactas').
% agregar interes  -> interes('ciencias exactas','matematicas'). -> 



% gestion de aptitudes, habilidades e intereses
% modificar nombre de aptitud -> aptitud inico y la relacion se deberian de modificar y esto aplica tambien para habilidades e intereses
% otra pagina para las asociaciones -> carrera con aptitud, carrera con interes, carrera con habilidad
% agregar un input para poder modificar los datos -> esto es en general para todas las tablas