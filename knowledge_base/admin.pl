% Facultades
facultad('ingenieria').
facultad('medicina').

% Carreras
carrera('ciencias_sistemas').
carrera('civil').
carrera('electronica').
carrera('investigacion').


% Aptitudes
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

% Asociacion de facultades con carreras

% Facultades - Carreras 
facultad_carrera('ingenieria, ciencias_sistemas').
facultad_carrera('ingenieria, civil').
facultad_carrera('ingenieria, electronica').

% Asociación de aptitudes con carreras

% Ingenieria - Ciencias de Sistemas
carrera_aptitud('ciencias_sistemas, pensamiento_logico').
carrera_aptitud('ciencias_sistemas, analisis_cuantitativo').
carrera_aptitud('ciencias_sistemas, conocimientos_en_programacion').
carrera_aptitud('ciencias_sistemas, trabajo_en_equipo').
carrera_aptitud('ciencias_sistemas, resolución_de_problemas').
carrera_aptitud('ciencias_sistemas, habilidades_comunicativas').

% Ingenieria - Civil
carrera_aptitud('civil, creatividad').
carrera_aptitud('civil, trabajo_en_equipo').
carrera_aptitud('civil, resolución_de_problemas').
carrera_aptitud('civil, atención_al_detalle').
carrera_aptitud('civil, conocimientos_en_fisica').
carrera_aptitud('civil, habilidades_comunicativas').

% Ingenieria - Electronica
carrera_aptitud('electronica, pensamiento_logico').
carrera_aptitud('electronica, análisis_cuantitativo').
carrera_aptitud('electronica, modelado_y_simulacion').
carrera_aptitud('electronica, trabajo_en_equipo').
carrera_aptitud('electronica, resolución_de_problemas').


% colocar una nueva vista para la parte de cursos y horarios
% todas las modificaciones (eliminacion, edicion) se descargan en un nuevo archivo de reglas diferente al archivo cargado original