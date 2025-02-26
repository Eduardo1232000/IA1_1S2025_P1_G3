% Facultades
facultad('ingenieria').
facultad('derecho').
facultad('medicina').
facultad('psicologia').

% Carreras
carrera('ingenieria, ciencias_sistemas').
carrera('ingenieria, civil').
carrera('ingenieria, electronica').
carrera('ingenieria, electrica').
carrera('ingenieria, mecanica').
carrera('ingenieria, mecanica_electrica').
carrera('ingenieria, mecanica_industrial').
carrera('ingenieria, industrial').
carrera('ingenieria, quimica').

carrera('derecho, civil').
carrera('derecho, mercantil').
carrera('derecho, penal').

carrera('medicina, investigacion').
carrera('medicina, cirugia').
carrera('medicina, psiquiatria').

carrera('psicologia, clinica').
carrera('psicologia, social').
carrera('psicologia, educativa').
carrera('psicologia, industrial').

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
aptitud('habilidad_para_hacer_pruebas_y_experimentos').
aptitud('conocimientos_en_fisica').
aptitud('habilidades_comunicativas').
aptitud('trabajo_bajo_presion').
aptitud('modelado_y_simulacion').
aptitud('diseño_de_sistemas').
aptitud('control_automatico').
aptitud('simulacion_de_procesos').
aptitud('conocimientos_de_sostenibilidad').

aptitud('habilidad_de_argumentacion').
aptitud('conocimientos_en_legislacion').
aptitud('comunicacion_verbal_efectiva').
aptitud('escucha_activa').
aptitud('investigacion_juridica').
aptitud('negociacion').
aptitud('redaccion_juridica').
aptitud('tolerancia_a_la_frustracion').
aptitud('etica_profesional').
aptitud('habilidades_de_organizacion').
aptitud('conocimiento_en_derecho_internacional').
aptitud('toma_de_decisiones').
aptitud('adaptabilidad').

aptitud('empatia').
aptitud('conocimientos_cientificos').
aptitud('capacidad_de_diagnostico').
aptitud('habilidades_de_comunicacion').
aptitud('capacidad_para_trabajar_en_equipo').
aptitud('conocimientos_en_farmacologia').
aptitud('resistencia_fisica_y_emocional').
aptitud('tecnicas_de_atencion_primaria').
aptitud('etica_medica').
aptitud('investigacion_medica').
aptitud('habilidad_para_la_enseñanza').

aptitud('comunicacion_interpersonal').
aptitud('habilidad_de_observacion').
aptitud('conocimientos_en_teorias_psicologicas').
aptitud('habilidades_de_intervencion').
aptitud('confidencialidad').
aptitud('capacidad_de_diagnostico_psicologico').
aptitud('desarrollo_de_intervenciones').
aptitud('investigacion_en_psicologia').
aptitud('habilidades_organizativas').

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

% Ingenieria - Electrica
carrera_aptitud('electrica, pensamiento_logico').
carrera_aptitud('electrica, conocimientos_en_matematicas').
carrera_aptitud('electrica, trabajo_en_equipo').
carrera_aptitud('electrica, resolución_de_problemas').
carrera_aptitud('electrica, conocimientos_en_fisica').

% Ingenieria - Mecanica
carrera_aptitud('mecanica, pensamiento_logico').
carrera_aptitud('mecanica, análisis_cuantitativo').
carrera_aptitud('mecanica, resolución_de_problemas').
carrera_aptitud('mecanica, atención_al_detalle').
carrera_aptitud('mecanica, habilidades_comunicativas').

% Ingenieria - Mecanica Electrica
carrera_aptitud('mecanica_electrica, creatividad').
carrera_aptitud('mecanica_electrica, pensamiento_logico').
carrera_aptitud('mecanica_electrica, conocimientos_en_fisica').
carrera_aptitud('mecanica_electrica, diseño_de_sistemas').

% Ingenieria - Mecanica Industrial
carrera_aptitud('mecanica_industrial, resolución_de_problemas').
carrera_aptitud('mecanica_industrial, trabajo_en_equipo').
carrera_aptitud('mecanica_industrial, gestión_de_proyectos').
carrera_aptitud('mecanica_industrial, habilidades_comunicativas').
carrera_aptitud('mecanica_industrial, conocimientos_de_sostenibilidad').

% Ingenieria - Industrial
carrera_aptitud('industrial, creatividad').
carrera_aptitud('industrial, trabajo_en_equipo').
carrera_aptitud('industrial, gestión_de_proyectos').
carrera_aptitud('industrial, capacidad_para_aprender_rapidamente').
carrera_aptitud('industrial, resolución_de_problemas').

% Ingenieria - Quimica
carrera_aptitud('quimica, pensamiento_logico').
carrera_aptitud('quimica, análisis_cuantitativo').
carrera_aptitud('quimica, resolución_de_problemas').
carrera_aptitud('quimica, trabajo_en_equipo').
carrera_aptitud('quimica, habilidad_para_hacer_pruebas_y_experimentos').

% Derecho - Civil
carrera_aptitud('civil, habilidad_de_argumentacion').
carrera_aptitud('civil, conocimientos_en_legislacion').
carrera_aptitud('civil, redaccion_juridica').
carrera_aptitud('civil, negociación').
carrera_aptitud('civil, comunicación_verbal_efectiva').

% Derecho - Mercantil
carrera_aptitud('mercantil, conocimiento_en_derecho_internacional').
carrera_aptitud('mercantil, negociación').
carrera_aptitud('mercantil, redaccion_juridica').
carrera_aptitud('mercantil, ética_profesional').

% Derecho - Penal
carrera_aptitud('penal, habilidad_de_argumentacion').
carrera_aptitud('penal, toma_de_decisiones').
carrera_aptitud('penal, habilidades_de_organizacion').
carrera_aptitud('penal, tolerancia_a_la_frustracion').
carrera_aptitud('penal, investigación_juridica').

% Medicina - Investigacion
carrera_aptitud('investigacion, conocimientos_cientificos').
carrera_aptitud('investigacion, investigación_medica').
carrera_aptitud('investigacion, habilidades_de_comunicacion').
carrera_aptitud('investigacion, capacidad_para_aprender_rapidamente').

% Medicina - Cirugia
carrera_aptitud('cirugia, capacidad_de_diagnostico').
carrera_aptitud('cirugia, resistencia_fisica_y_emocional').
carrera_aptitud('cirugia, habilidades_de_comunicacion').
carrera_aptitud('cirugia, ética_medica').

% Medicina - Psiquiatria
carrera_aptitud('psiquiatria, empatía').
carrera_aptitud('psiquiatria, conocimientos_en_farmacologia').
carrera_aptitud('psiquiatria, capacidad_para_trabajar_en_equipo').
carrera_aptitud('psiquiatria, ética_medica').

% Psicología - Clínica
carrera_aptitud('clinica, habilidades_de_intervencion').
carrera_aptitud('clinica, capacidad_de_diagnostico_psicologico').
carrera_aptitud('clinica, confidencialidad').
carrera_aptitud('clinica, empatía').

% Psicología - Social
carrera_aptitud('social, comunicación_interpersonal').
carrera_aptitud('social, habilidades_organizativas').
carrera_aptitud('social, empatía').
carrera_aptitud('social, desarrollo_de_intervenciones').

% Psicología - Educativa
carrera_aptitud('educativa, habilidades_de_intervencion').
carrera_aptitud('educativa, investigación_en_psicologia').
carrera_aptitud('educativa, confidencialidad').
carrera_aptitud('educativa, habilidades_organizativas').

% Psicología - Industrial
carrera_aptitud('industrial, comunicación_interpersonal').
carrera_aptitud('industrial, habilidades_organizativas').
carrera_aptitud('industrial, desarrollo_de_intervenciones').
carrera_aptitud('industrial, investigación_en_psicologia').
