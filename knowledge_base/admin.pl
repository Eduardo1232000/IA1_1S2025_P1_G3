% Facultades -> facultad_unico
facultad('ingenieria').
facultad('medicina').

% Carreras
carrera('ciencias_sistemas').
carrera('civil').
carrera('electronica').
carrera('investigacion').


% Aptitudes -> aptitud_unico
aptitud('pensamiento_logico').
aptitud('analisis_cuantitativo').
aptitud('creatividad').
aptitud('conocimientos_en_matematicas').
aptitud('trabajo_en_equipo').
aptitud('resolucion_de_problemas').
aptitud('atencion_al_detalle').
aptitud('pensamiento_critico').
aptitud('conocimientos_en_programacion').
aptitud('Gestion_de_proyectos').
aptitud('capacidad_para_aprender_rapidamente').

% Cursos
curso('programacion_1').
curso('estructuras_de_datos').
curso('resistencia_de_materiales').
curso('dibujo_tecnico').
curso('circuitos_electricos').
curso('electronica_digital').

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

% Asociacion de facultades con carreras

% Facultades - Carreras  -> facultad 
facultad_carrera('ingenieria, ciencias_sistemas').
facultad_carrera('ingenieria, civil').
facultad_carrera('ingenieria, electronica').

% Asociación de aptitudes con carreras

% Ingenieria - Ciencias de Sistemas -> aptitud -> primero la aptitud y luego la carrera

carrera_aptitud('ciencias_sistemas, pensamiento_logico').
carrera_aptitud('ciencias_sistemas, analisis_cuantitativo').
carrera_aptitud('ciencias_sistemas, conocimientos_en_programacion').
carrera_aptitud('ciencias_sistemas, trabajo_en_equipo').
carrera_aptitud('ciencias_sistemas, resolución_de_problemas').
carrera_aptitud('ciencias_sistemas, habilidades_comunicativas').

% Ingenieria - Civil -> primero la aptitud y luego la carrera
carrera_aptitud('civil, creatividad').
carrera_aptitud('civil, trabajo_en_equipo').
carrera_aptitud('civil, resolución_de_problemas').
carrera_aptitud('civil, atención_al_detalle').
carrera_aptitud('civil, conocimientos_en_fisica').
carrera_aptitud('civil, habilidades_comunicativas').

% Ingenieria - Electronica -> primero la aptitud y luego la carrera
carrera_aptitud('electronica, pensamiento_logico').
carrera_aptitud('electronica, análisis_cuantitativo').
carrera_aptitud('electronica, modelado_y_simulacion').
carrera_aptitud('electronica, trabajo_en_equipo').
carrera_aptitud('electronica, resolución_de_problemas').


% Asociar Carreras y Cursos
carrera_curso('ciencias_sistemas', 'programacion_1').
carrera_curso('ciencias_sistemas', 'estructuras_de_datos').
carrera_curso('civil', 'resistencia_de_materiales').
carrera_curso('civil', 'dibujo_tecnico').
carrera_curso('electronica', 'circuitos_electricos').
carrera_curso('electronica', 'electronica_digital').

% horario(curso, dia, hora inicio, hora fin). y quemados en el front
horario('programacion_1', 'lunes', '08:00', '10:00').
horario('estructuras_de_datos', 'miercoles', '10:00', '12:00').
horario('resistencia_de_materiales', 'martes', '14:00', '16:00').
horario('dibujo_tecnico', 'jueves', '16:00', '18:00').
horario('circuitos_electricos', 'viernes', '08:00', '10:00').
horario('electronica_digital', 'sabado', '10:00', '12:00').


% colocar una nueva vista para la parte de cursos y horarios
% todas las modificaciones (eliminacion, edicion) se descargan en un nuevo archivo de reglas diferente al archivo cargado original


% otra pestaña para gestionar aptitudes, habilidades e intereses



% agregar habilidad_unica y es para la lista (select) -> habilidad_unica('Analisis de datos').
% agregar habilidad y es para la lista (select) -> habilidad('Analisis de datos','matematicas'). -> habilidad con carrera

% agregar interes_unico y es para la lista (select) -> interes_unico('ciencias exactas').
% agregar interes  -> interes('ciencias exactas','matematicas'). -> 



% gestión de aptitudes, habilidades e intereses
% modificar nombre de aptitud -> aptitud inico y la relacion se deberian de modificar y esto aplica tambien para habilidades e intereses
% otra pagina para las asociaciones -> carrera con aptitud, carrera con interes, carrera con habilidad
% agregar un input para poder modificar los datos -> esto es en general para todas las tablas