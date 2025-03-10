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

% cursos, horarios
curso('0001', 'etica profesional').
seccion('0001', 'a', [lun-12.33-13.17,mie-12.33-13.17,vie-12.33-13.17]).
seccion('0001', 'p', [lun-13.17-14.00,mie-13.17-14.00,vie-13.17-14.00]).
seccion('0001', 'q', [lun-17.33-18.17,mar-17.33-18.17,mie-17.33-18.17]).
curso('0005', 'tecnicas de estudio e investigacion').
seccion('0005', 'a', [mar-10.67-11.50,jue-10.67-11.50,sab-8.00-8.83]).
seccion('0005', 'c', [lun-11.50-12.33,mie-11.50-12.33,sab-9.67-10.50]).
seccion('0005', 'd', [lun-14.00-14.83,mie-14.00-14.83,sab-14.00-14.83]).
seccion('0005', 'f', [mar-9.00-9.83,mie-9.00-9.83,sab-11.33-12.17]).
seccion('0005', 'g', [lun-9.00-9.83,mie-9.00-9.83,sab-12.17-13.00]).
seccion('0005', 'h', [lun-10.67-11.50,mie-10.67-11.50,sab-13.17-14.00]).
seccion('0005', 'i', [lun-8.00-8.83,mie-8.00-8.83,sab-13.17-14.00]).
seccion('0005', 'k', [lun-15.67-17.33,mie-13.17-14.00]).
seccion('0005', 'l', [sab-8.83-10.50,sab-10.50-11.33]).
seccion('0005', 'o', [mar-15.67-17.33,mie-14.00-14.83]).
seccion('0005', 'r', [mar-17.33-19.00,lun-13.17-14.00]).
seccion('0005', 't', [lun-15.67-16.50,mie-15.67-16.50,sab-8.00-8.83]).
curso('0006', 'idioma tecnico 1').
seccion('0006', 'ei', [jue-11.50-12.33,lun-12.33-13.17,mie-12.33-13.17,jue-12.33-13.17]).
seccion('0006', 'f', [mie-11.50-13.17,vie-11.50-13.17]).
seccion('0006', 'g', [mar-9.00-9.83,lun-9.83-10.67,mar-9.83-10.67,mie-9.83-10.67]).
seccion('0006', 'j', [mar-7.17-8.83,mie-7.17-8.83]).
seccion('0006', 'k', [lun-10.67-12.33,mie-10.67-12.33]).
seccion('0006', 'm', [mar-10.67-12.33,jue-10.67-12.33]).
seccion('0006', 'p', [lun-15.67-16.50,mar-15.67-16.50,mie-15.67-16.50,jue-15.67-16.50]).
seccion('0006', 'q', [lun-14.00-14.83,mar-14.00-14.83,mie-14.00-14.83,jue-14.00-14.83]).
curso('0008', 'idioma tecnico 2').
seccion('0008', 'a', [lun-9.00-9.83,mar-9.00-9.83,mie-9.00-9.83,jue-9.00-9.83]).
seccion('0008', 'o', [lun-13.17-14.00,mar-13.17-14.00,mie-13.17-14.00,jue-13.17-14.00]).
curso('0009', 'idioma tecnico 3').
seccion('0009', 'a', [lun-9.00-9.83,mar-9.00-9.83,mie-9.00-9.83,jue-9.00-9.83]).
seccion('0009', 'n', [lun-14.00-15.67,mie-14.00-15.67]).
curso('0011', 'idioma tecnico 4').
seccion('0011', 'a', [mar-12.33-14.00,jue-12.33-14.00]).
seccion('0011', 'n', [lun-14.83-15.67,mar-14.83-15.67,mie-14.83-15.67,jue-14.83-15.67]).
curso('0014', 'economia').
seccion('0014', 'a+', [sab-10.50-12.17]).
seccion('0014', 'a-', [sab-10.50-12.17]).
curso('0017', 'area social humanistica 1').
seccion('0017', 'a', [lun-9.00-9.83,mie-9.00-9.83,jue-9.00-9.83,vie-9.00-9.83]).
seccion('0017', 'b', [lun-9.83-10.67,mie-9.83-10.67,jue-9.83-10.67,vie-9.83-10.67]).
seccion('0017', 'c', [lun-8.00-8.83,mar-8.00-8.83,mie-8.00-8.83,vie-8.00-8.83]).
seccion('0017', 'd', [lun-8.00-8.83,mar-8.00-8.83,mie-8.00-8.83,vie-8.00-8.83]).
seccion('0017', 'e', [lun-11.50-12.33,mar-11.50-12.33,mie-11.50-12.33,vie-11.50-12.33]).
seccion('0017', 'f', [lun-9.83-10.67,mar-9.83-10.67,mie-9.83-10.67,vie-9.83-10.67]).
seccion('0017', 'g', [lun-10.67-11.50,mar-10.67-11.50,mie-10.67-11.50,vie-10.67-11.50]).
seccion('0017', 'h', [lun-12.33-13.17,mar-12.33-13.17,mie-12.33-13.17,vie-12.33-13.17]).
seccion('0017', 'i', [lun-10.67-11.50,mar-10.67-11.50,mie-10.67-11.50,vie-10.67-11.50]).
seccion('0017', 'j', [lun-10.67-11.50,mar-10.67-11.50,mie-10.67-11.50,vie-10.67-11.50]).
seccion('0017', 'l', [lun-9.83-10.67,mar-9.83-10.67,mie-9.83-10.67,jue-9.83-10.67]).
seccion('0017', 'm', [lun-9.00-9.83,mar-9.00-9.83,jue-9.00-9.83,vie-9.00-9.83]).
seccion('0017', 'n', [lun-14.00-14.83,mar-14.00-14.83,mie-14.00-14.83,vie-14.00-14.83]).
seccion('0017', 'r', [lun-13.17-14.00,mar-13.17-14.00,mie-13.17-14.00,vie-13.17-14.00]).
curso('0018', 'filosofia de la ciencia').
seccion('0018', 'a', [mar-8.00-8.83,jue-8.00-8.83]).
seccion('0018', 'b', [mar-9.83-10.67,jue-9.83-10.67]).
seccion('0018', 'd', [lun-10.67-11.50,mie-10.67-11.50]).
seccion('0018', 'e', [mar-9.00-9.83,vie-9.00-9.83]).
seccion('0018', 'f', [mar-9.00-9.83,jue-9.00-9.83]).
seccion('0018', 'n', [mar-14.83-15.67,jue-14.83-15.67]).
seccion('0018', 'p', [mar-14.00-14.83,jue-14.00-14.83]).
seccion('0018', 'q', [mar-16.50-17.33,jue-16.50-17.33]).
seccion('0018', 'r', [mar-18.17-19.00,jue-18.17-19.00]).
curso('0019', 'area social humanistica 2').
seccion('0019', 'a', [lun-7.17-8.00,mar-7.17-8.00,mie-7.17-8.00,vie-7.17-8.00]).
seccion('0019', 'b', [lun-10.67-11.50,mar-10.67-11.50,mie-10.67-11.50,vie-10.67-11.50]).
seccion('0019', 'c', [lun-8.00-8.83,mar-8.00-8.83,mie-8.00-8.83,vie-8.00-8.83]).
curso('0022', 'psicologia industrial').
seccion('0022', 'a', [mar-8.00-8.83,jue-8.00-8.83]).
seccion('0022', 'b', [mar-8.00-8.83,jue-8.00-8.83]).
seccion('0022', 'c', [mar-8.83-9.67,jue-8.83-9.67]).
seccion('0022', 'd', [mar-9.00-9.83,jue-9.00-9.83]).
seccion('0022', 'n+', [mar-17.33-18.17,jue-17.33-18.17]).
seccion('0022', 'n-', [mar-17.33-18.17,jue-17.33-18.17]).
seccion('0022', 'p', [mar-18.17-19.00,jue-18.17-19.00]).
curso('0027', 'biologia').
seccion('0027', 'a', [lun-9.83-10.67,mie-9.83-10.67,jue-9.83-10.67]).
seccion('0027', 'n', [lun-17.33-18.17,mie-17.33-18.17,vie-17.33-18.17]).
curso('0028', 'ecologia').
seccion('0028', 'a+', [lun-10.67-11.50,mie-10.67-11.50,vie-10.67-11.50]).
seccion('0028', 'a-', [lun-10.67-11.50,mie-10.67-11.50,vie-10.67-11.50]).
seccion('0028', 'n', [lun-14.00-14.83,mie-14.00-14.83,vie-14.00-14.83]).
seccion('0028', 'n+', [lun-14.00-14.83,mie-14.00-14.83,vie-14.00-14.83]).
seccion('0028', 'n-', [lun-14.00-14.83,mie-14.00-14.83,vie-14.00-14.83]).
seccion('0028', 'o', [lun-15.67-16.50,mie-15.67-16.50,vie-15.67-16.50]).
seccion('0028', 'p', [lun-16.50-17.33,mie-16.50-17.33,vie-16.50-17.33]).
seccion('0028', 'q', [lun-19.00-19.83,mie-19.00-19.83,vie-19.00-19.83]).
curso('0030', 'geografia').
seccion('0030', 'a', [mar-7.17-8.83]).
seccion('0030', 'b', [jue-9.00-10.67]).
seccion('0030', 'n', [jue-19.00-20.67]).
curso('0039', 'deportes 1').
seccion('0039', 'b', [mar-11.50-12.33]).
seccion('0039', 'd', [mar-10.67-11.50]).
seccion('0039', 'e', [vie-14.00-14.83]).
seccion('0039', 'f', [mie-13.17-14.00]).
seccion('0039', 'g', [vie-11.50-12.33]).
seccion('0039', 'h', [mar-13.17-14.00]).
seccion('0039', 'i', [jue-10.67-11.50]).
seccion('0039', 'j', [vie-12.33-13.17]).
seccion('0039', 'l', [mie-9.00-9.83]).
seccion('0039', 'm', [mie-11.50-12.33]).
seccion('0039', 'n', [jue-16.50-17.33]).
seccion('0039', 'q', [mar-14.83-15.67]).
seccion('0039', 'u', [lun-12.33-13.17]).
seccion('0039', 'w', [jue-15.67-16.50]).
curso('0060', 'taller de sist de inf geografica').
seccion('0060', 'n', [lun-18.17-19.00,mie-18.17-19.00,vie-18.17-19.00]).
curso('0069', 'area tecnica complementaria 1').
seccion('0069', 'a', [lun-10.67-12.33]).
seccion('0069', 'b', [mar-9.00-10.67]).
seccion('0069', 'c', [jue-10.67-12.33]).
seccion('0069', 'd', [mie-10.67-12.33]).
seccion('0069', 'e', [mie-7.17-8.83]).
seccion('0069', 'e+', [lun-7.17-8.83]).
seccion('0069', 'e-', [mie-7.17-8.83]).
seccion('0069', 'f', [mar-10.67-12.33]).
seccion('0069', 'g', [lun-9.00-10.67]).
seccion('0069', 'h', [lun-7.17-8.83]).
seccion('0069', 'i', [mar-7.17-8.83]).
seccion('0069', 'l', [vie-9.00-10.67]).
seccion('0069', 'm', [mie-9.00-10.67]).
seccion('0069', 'n', [jue-14.00-15.67]).
seccion('0069', 'p', [lun-13.17-14.83]).
seccion('0069', 'q', [mie-14.83-16.50]).
curso('0073', 'dibujo tecnico mecanico').
seccion('0073', 'n', [lun-19.00-19.83,mar-19.00-19.83]).
seccion('0073', 'p', [mie-19.83-20.67,jue-19.83-20.67]).
curso('0074', 'dibujo constructivo para ingenieria').
seccion('0074', 'a', [jue-7.17-8.83]).
seccion('0074', 'r', [mar-14.83-16.50]).
seccion('0074', 'x', [lun-13.17-14.83]).
seccion('0074', 'y', [mie-13.17-14.83]).
seccion('0074', 'z', [jue-13.17-14.83]).
curso('0080', 'topografia 1').
seccion('0080', 'a', [lun-8.00-8.83,mie-8.00-8.83,vie-8.00-8.83]).
seccion('0080', 'n', [lun-19.83-20.67,mie-19.83-20.67,vie-19.83-20.67]).
seccion('0080', '1', [mar-7.17-9.67]).
seccion('0080', '2', [sab-7.17-9.67]).
seccion('0080', '3', [sab-9.67-12.17]).
seccion('0080', '4', [mar-7.17-8.83]).
seccion('0080', '5', [sab-7.17-8.83]).
seccion('0080', '6+', [sab-13.00-14.67]).
seccion('0080', '6-', [sab-13.00-14.67]).
curso('0082', 'topografia 2').
seccion('0082', 'a', [lun-7.17-8.00,mie-7.17-8.00,vie-7.17-8.00]).
seccion('0082', 'n+', [lun-19.00-19.83,mie-19.00-19.83,vie-19.00-19.83]).
seccion('0082', 'n-', [lun-19.00-19.83,mie-19.00-19.83,vie-19.00-19.83]).
seccion('0082', '1', [jue-7.17-9.67]).
seccion('0082', '2', [sab-7.17-9.67]).
seccion('0082', '3', [sab-9.67-12.17]).
seccion('0082', '4+', [jue-7.17-12.33]).
seccion('0082', '4-', [jue-7.17-12.33]).
curso('0084', 'topografia 3').
seccion('0084', 'n', [lun-17.33-18.17,mie-17.33-18.17,vie-17.33-18.17]).
seccion('0084', '1', [sab-11.33-13.00]).
seccion('0084', '_a', [sab-7.17-11.33]).
curso('0090', 'programacion de computadoras 1').
seccion('0090', 'a', [mar-9.83-10.67,mie-9.83-10.67,sab-10.50-12.17]).
seccion('0090', 'n', [lun-13.17-14.00,vie-13.17-14.00,mar-14.83-16.50]).
seccion('0090', 'p', [lun-17.33-18.17,mie-17.33-18.17,sab-10.50-12.17]).
curso('0092', 'programacion de computadoras 2').
seccion('0092', 'n', [lun-16.50-17.33,mie-16.50-17.33,sab-17.17-18.83]).
seccion('0092', 'p', [mar-18.17-19.00,jue-18.17-19.00,sab-8.83-10.50]).
seccion('0092', 'q', [lun-17.33-18.17,mie-17.33-18.17,mar-16.50-18.17]).
seccion('0092', 'r', [mie-13.17-14.00,vie-12.33-13.17,sab-12.17-13.83]).
curso('0101', 'area matematica basica 1').
seccion('0101', 'a', [lun-7.17-8.83,mar-7.17-8.83,mie-7.17-8.83,vie-7.17-8.83]).
seccion('0101', 'b', [lun-7.17-8.83,mar-7.17-8.83,mie-7.17-8.83,vie-7.17-8.83]).
seccion('0101', 'c', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0101', 'd', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0101', 'e', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0101', 'f', [lun-7.17-8.83,mar-7.17-8.83,mie-7.17-8.83,vie-7.17-8.83]).
seccion('0101', 'g', [lun-7.17-8.83,mar-7.17-8.83,mie-7.17-8.83,vie-7.17-8.83]).
seccion('0101', 'h', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0101', 'i', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0101', 'j', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0101', 'k', [lun-7.17-8.83,mar-7.17-8.83,mie-7.17-8.83,vie-7.17-8.83]).
seccion('0101', 'l', [lun-7.17-8.83,mar-7.17-8.83,mie-7.17-8.83,vie-7.17-8.83]).
seccion('0101', 'm', [lun-7.17-8.83,mar-7.17-8.83,mie-7.17-8.83,vie-7.17-8.83]).
seccion('0101', 'n', [lun-14.83-16.50,mar-14.83-16.50,mie-14.83-16.50,vie-14.83-16.50]).
seccion('0101', 'o', [lun-12.33-14.00,mar-12.33-14.00,mie-12.33-14.00,vie-12.33-14.00]).
seccion('0101', 'p', [lun-14.83-16.50,mar-14.83-16.50,mie-14.83-16.50,vie-14.83-16.50]).
seccion('0101', 't', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0101', 'u', [lun-18.17-19.83,mar-18.17-19.83,mie-18.17-19.83,vie-18.17-19.83]).
seccion('0101', 'x', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0101', 'y', [lun-10.67-12.33,mar-10.67-12.33,mie-10.67-12.33,vie-10.67-12.33]).
seccion('0101', 'z', [lun-7.17-8.83,mar-7.17-8.83,mie-7.17-8.83,vie-7.17-8.83]).
curso('0103', 'area matematica basica 2').
seccion('0103', 'a', [lun-7.17-8.83,mar-7.17-8.83,mie-7.17-8.83,vie-7.17-8.83]).
seccion('0103', 'b', [lun-7.17-8.83,mar-7.17-8.83,mie-7.17-8.83,vie-7.17-8.83]).
seccion('0103', 'e', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0103', 'f', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0103', 'g', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0103', 'm', [lun-13.17-14.83,mar-13.17-14.83,mie-13.17-14.83,vie-13.17-14.83]).
seccion('0103', 'n', [lun-14.83-16.50,mar-14.83-16.50,mie-14.83-16.50,vie-14.83-16.50]).
seccion('0103', 'p', [lun-14.83-16.50,mar-14.83-16.50,mie-14.83-16.50,vie-14.83-16.50]).
seccion('0103', 's', [lun-19.00-20.67,mar-19.00-20.67,mie-19.00-20.67,vie-19.00-20.67]).
curso('0107', 'area matematica intermedia 1').
seccion('0107', 'a', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0107', 'b', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0107', 'd', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0107', 'e', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0107', 'f', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0107', 'g', [lun-9.00-10.67,mar-9.00-10.67,mie-9.00-10.67,vie-9.00-10.67]).
seccion('0107', 'h', [lun-7.17-8.83,mar-7.17-8.83,mie-7.17-8.83,vie-7.17-8.83]).
seccion('0107', 'i', [lun-10.67-12.33,mar-10.67-12.33,mie-10.67-12.33,vie-10.67-12.33]).
seccion('0107', 'n', [lun-14.83-16.50,mar-14.83-16.50,mie-14.83-16.50,vie-14.83-16.50]).
seccion('0107', 'q', [lun-18.17-19.83,mar-18.17-19.83,mie-18.17-19.83,vie-18.17-19.83]).
curso('0112', 'area matematica intermedia 2').
seccion('0112', 'c', [lun-9.00-9.83,mar-9.00-9.83,mie-9.00-9.83,vie-9.00-9.83]).
seccion('0112', 'd', [lun-9.00-9.83,mar-9.00-9.83,mie-9.00-9.83,vie-9.00-9.83]).
seccion('0112', 'e', [lun-9.00-9.83,mar-9.00-9.83,mie-9.00-9.83,vie-9.00-9.83]).
seccion('0112', 'f', [lun-8.00-8.83,mar-8.00-8.83,mie-8.00-8.83,vie-8.00-8.83]).
seccion('0112', 'm', [lun-14.00-14.83,mar-14.00-14.83,mie-14.00-14.83,vie-14.00-14.83]).
seccion('0112', 'n', [lun-14.83-15.67,mar-14.83-15.67,mie-14.83-15.67,vie-14.83-15.67]).
seccion('0112', 'p', [lun-15.67-16.50,mar-15.67-16.50,mie-15.67-16.50,vie-15.67-16.50]).
seccion('0112', 'q', [lun-14.83-15.67,mar-14.83-15.67,mie-14.83-15.67,vie-14.83-15.67]).
seccion('0112', 'r', [lun-17.33-18.17,mar-17.33-18.17,mie-17.33-18.17,vie-17.33-18.17]).
curso('0114', 'area matematica intermedia 3').
seccion('0114', 'c', [lun-9.83-10.67,mar-9.83-10.67,mie-9.83-10.67,vie-9.83-10.67]).
seccion('0114', 'd', [lun-9.83-10.67,mar-9.83-10.67,mie-9.83-10.67,vie-9.83-10.67]).
seccion('0114', 'e', [lun-9.83-10.67,mar-9.83-10.67,mie-9.83-10.67,vie-9.83-10.67]).
seccion('0114', 'f', [lun-8.00-8.83,mar-8.00-8.83,mie-8.00-8.83,vie-8.00-8.83]).
seccion('0114', 'g', [lun-13.17-14.00,mar-13.17-14.00,mie-13.17-14.00,vie-13.17-14.00]).
seccion('0114', 'm', [lun-14.83-15.67,mar-14.83-15.67,mie-14.83-15.67,vie-14.83-15.67]).
seccion('0114', 'n', [lun-15.67-16.50,mar-15.67-16.50,mie-15.67-16.50,vie-15.67-16.50]).
seccion('0114', 'p', [lun-15.67-16.50,mar-15.67-16.50,mie-15.67-16.50,vie-15.67-16.50]).
seccion('0114', 'q', [lun-16.50-17.33,mar-16.50-17.33,mie-16.50-17.33,vie-16.50-17.33]).
curso('0116', 'matematica aplicada 3').
seccion('0116', 'a', [lun-9.00-9.83,mie-9.00-9.83,vie-9.00-9.83]).
seccion('0116', 'b', [lun-9.00-9.83,mie-9.00-9.83,vie-9.00-9.83]).
seccion('0116', 'c', [lun-11.50-12.33,mie-11.50-12.33,vie-11.50-12.33]).
seccion('0116', 'n', [lun-14.00-14.83,mie-14.00-14.83,vie-14.00-14.83]).
seccion('0116', 'p', [lun-14.83-15.67,mie-14.83-15.67,vie-14.83-15.67]).
seccion('0116', 'q', [lun-16.50-17.33,mie-16.50-17.33,vie-16.50-17.33]).
seccion('0116', 'r', [lun-17.33-18.17,mie-17.33-18.17,vie-17.33-18.17]).
curso('0118', 'matematica aplicada 1').
seccion('0118', 'a', [lun-9.83-10.67,mie-9.83-10.67,vie-9.83-10.67]).
seccion('0118', 'b', [lun-9.83-10.67,mie-9.83-10.67,vie-9.83-10.67]).
seccion('0118', 'n', [lun-16.50-17.33,mie-16.50-17.33,vie-16.50-17.33]).
seccion('0118', 'o', [lun-15.67-16.50,mie-15.67-16.50,vie-15.67-16.50]).
seccion('0118', 'q', [lun-18.17-19.00,mie-18.17-19.00,vie-18.17-19.00]).
seccion('0118', 'r', [lun-17.33-18.17,mie-17.33-18.17,vie-17.33-18.17]).
curso('0120', 'matematica aplicada 2').
seccion('0120', 'n', [lun-15.67-16.50,mie-15.67-16.50,vie-15.67-16.50]).
curso('0122', 'matematica aplicada 4').
seccion('0122', 'n', [lun-14.83-15.67,mie-14.83-15.67,vie-14.83-15.67]).
curso('0123', 'matematica aplicada 5').
seccion('0123', 'a', [lun-7.17-8.00,mie-7.17-8.00,vie-7.17-8.00]).
seccion('0123', 'n', [lun-16.50-17.33,mie-16.50-17.33,vie-16.50-17.33]).
curso('0147', 'fisica basica').
seccion('0147', 'a', [lun-7.17-8.00,mar-7.17-8.00,jue-7.17-8.00,vie-7.17-8.00]).
seccion('0147', 'b', [lun-8.00-8.83,mar-8.00-8.83,jue-8.00-8.83,vie-8.00-8.83]).
seccion('0147', 'c+', [lun-8.00-8.83,mar-8.00-8.83,jue-8.00-8.83,vie-8.00-8.83]).
seccion('0147', 'c-', [lun-8.00-8.83,mar-8.00-8.83,jue-8.00-8.83,vie-8.00-8.83]).
seccion('0147', 'd+', [lun-9.00-9.83,mar-9.00-9.83,jue-9.00-9.83,vie-9.00-9.83]).
seccion('0147', 'd-', [lun-9.00-9.83,mar-9.00-9.83,jue-9.00-9.83,vie-9.00-9.83]).
seccion('0147', 'e1', [lun-11.50-12.33,mar-11.50-12.33,jue-11.50-12.33,vie-11.50-12.33]).
seccion('0147', 'e2', [lun-11.50-12.33,mar-11.50-12.33,jue-11.50-12.33,vie-11.50-12.33]).
seccion('0147', 'e3', [lun-11.50-12.33,mar-11.50-12.33,jue-11.50-12.33,vie-11.50-12.33]).
seccion('0147', 'f1', [lun-12.33-13.17,mar-12.33-13.17,jue-12.33-13.17,vie-12.33-13.17]).
seccion('0147', 'f2', [lun-12.33-13.17,mar-12.33-13.17,jue-12.33-13.17,vie-12.33-13.17]).
seccion('0147', 'n+', [lun-13.17-14.00,mar-13.17-14.00,jue-13.17-14.00,vie-13.17-14.00]).
seccion('0147', 'n-', [lun-13.17-14.00,mar-13.17-14.00,jue-13.17-14.00,vie-13.17-14.00]).
seccion('0147', 'p', [lun-14.00-14.83,mar-14.00-14.83,jue-14.00-14.83,vie-14.00-14.83]).
seccion('0147', 'q', [lun-14.00-14.83,mar-14.00-14.83,jue-14.00-14.83,vie-14.00-14.83]).
seccion('0147', 'r', [lun-15.67-16.50,mar-15.67-16.50,jue-15.67-16.50,vie-15.67-16.50]).
seccion('0147', 's', [lun-16.50-17.33,mar-16.50-17.33,jue-16.50-17.33,vie-16.50-17.33]).
seccion('0147', 'z', [sab-7.17-10.50]).
seccion('0147', 'a1', [mie-7.17-8.83]).
seccion('0147', 'a2', [mie-7.17-8.83]).
seccion('0147', 'a3', [mie-9.00-10.67]).
seccion('0147', 'a4', [mie-9.00-10.67]).
seccion('0147', 'b1', [mie-10.67-12.33]).
seccion('0147', 'b2', [mie-10.67-12.33]).
seccion('0147', 'b3', [mie-10.67-12.33]).
seccion('0147', 'c1', [mie-12.33-14.00]).
seccion('0147', 'c2', [mie-12.33-14.00]).
seccion('0147', 'c3', [mie-12.33-14.00]).
seccion('0147', 'd1', [mie-14.00-15.67]).
seccion('0147', 'd2', [mie-14.00-15.67]).
seccion('0147', 'd3', [mie-14.00-15.67]).
seccion('0147', 'g1', [mie-16.50-18.17]).
seccion('0147', 'h1', [mie-18.17-19.83]).
curso('0150', 'fisica 1').
seccion('0150', 'a+', [lun-7.17-8.00,mie-7.17-8.00,jue-7.17-8.00,vie-7.17-8.00]).
seccion('0150', 'a-', [lun-7.17-8.00,mie-7.17-8.00,jue-7.17-8.00,vie-7.17-8.00]).
seccion('0150', 'b', [lun-8.00-8.83,mie-8.00-8.83,jue-8.00-8.83,vie-8.00-8.83]).
seccion('0150', 'bv', [lun-8.00-8.83,mie-8.00-8.83,jue-8.00-8.83,vie-8.00-8.83]).
seccion('0150', 'c', [lun-9.00-9.83,mie-9.00-9.83,jue-9.00-9.83,vie-9.00-9.83]).
seccion('0150', 'e+', [lun-10.67-11.50,mie-10.67-11.50,jue-10.67-11.50,vie-10.67-11.50]).
seccion('0150', 'e-', [lun-10.67-11.50,mie-10.67-11.50,jue-10.67-11.50,vie-10.67-11.50]).
seccion('0150', 'f+', [lun-11.50-12.33,mie-11.50-12.33,jue-11.50-12.33,vie-11.50-12.33]).
seccion('0150', 'f-', [lun-11.50-12.33,mie-11.50-12.33,jue-11.50-12.33,vie-11.50-12.33]).
seccion('0150', 'g', [lun-12.33-13.17,mie-12.33-13.17,jue-12.33-13.17,vie-12.33-13.17]).
seccion('0150', 'n', [lun-13.17-14.00,mie-13.17-14.00,jue-13.17-14.00,vie-13.17-14.00]).
seccion('0150', 'p', [lun-14.00-14.83,mie-14.00-14.83,jue-14.00-14.83,vie-14.00-14.83]).
seccion('0150', 'q+', [lun-14.83-15.67,mie-14.83-15.67,jue-14.83-15.67,vie-14.83-15.67]).
seccion('0150', 'q-', [lun-14.83-15.67,mie-14.83-15.67,jue-14.83-15.67,vie-14.83-15.67]).
seccion('0150', 'r', [lun-15.67-16.50,mie-15.67-16.50,jue-15.67-16.50,vie-15.67-16.50]).
seccion('0150', 's', [lun-16.50-17.33,mie-16.50-17.33,jue-16.50-17.33,vie-16.50-17.33]).
seccion('0150', 't+', [lun-17.33-18.17,mie-17.33-18.17,jue-17.33-18.17,vie-17.33-18.17]).
seccion('0150', 't-', [lun-17.33-18.17,mie-17.33-18.17,jue-17.33-18.17,vie-17.33-18.17]).
seccion('0150', 'u', [lun-18.17-19.83,mie-18.17-19.83]).
seccion('0150', 'z', [sab-7.17-10.50]).
seccion('0150', 'a1', [mar-7.17-8.83]).
seccion('0150', 'a2', [mar-7.17-8.83]).
seccion('0150', 'a3', [mar-7.17-8.83]).
seccion('0150', 'b1', [mar-9.00-10.67]).
seccion('0150', 'b2', [mar-9.00-10.67]).
seccion('0150', 'b3', [mar-9.00-10.67]).
seccion('0150', 'c1', [mar-10.67-12.33]).
seccion('0150', 'c2', [mar-10.67-12.33]).
seccion('0150', 'c3', [mar-10.67-12.33]).
seccion('0150', 'd1', [mar-12.33-14.00]).
seccion('0150', 'd2', [mar-12.33-14.00]).
seccion('0150', 'd3', [mar-12.33-14.00]).
seccion('0150', 'e1', [mar-14.00-15.67]).
seccion('0150', 'e2', [mar-14.00-15.67]).
seccion('0150', 'e3', [mar-14.00-15.67]).
seccion('0150', 'f1', [mar-16.50-18.17]).
seccion('0150', 'g1', [mar-18.17-19.83]).
seccion('0150', 'g2', [mar-18.17-19.83]).
curso('0152', 'fisica 2').
seccion('0152', 'a', [lun-7.17-8.00,mar-7.17-8.00,mie-7.17-8.00,vie-7.17-8.00]).
seccion('0152', 'b+', [lun-10.67-11.50,mar-10.67-11.50,mie-10.67-11.50,vie-10.67-11.50]).
seccion('0152', 'b-', [lun-10.67-11.50,mar-10.67-11.50,mie-10.67-11.50,vie-10.67-11.50]).
seccion('0152', 'c+', [lun-12.33-13.17,mar-12.33-13.17,mie-12.33-13.17,vie-12.33-13.17]).
seccion('0152', 'c-', [lun-12.33-13.17,mar-12.33-13.17,mie-12.33-13.17,vie-12.33-13.17]).
seccion('0152', 'n', [lun-14.00-14.83,mar-14.00-14.83,mie-14.00-14.83,vie-14.00-14.83]).
seccion('0152', 'n1', [lun-14.00-14.83,mar-14.00-14.83,mie-14.00-14.83,vie-14.00-14.83]).
seccion('0152', 'p', [lun-14.83-15.67,mar-14.83-15.67,mie-14.83-15.67,vie-14.83-15.67]).
seccion('0152', 'q', [lun-16.50-17.33,mar-16.50-17.33,mie-16.50-17.33,vie-16.50-17.33]).
seccion('0152', 'r', [lun-18.17-19.83,mie-18.17-19.83]).
seccion('0152', 'a1', [jue-7.17-8.83]).
seccion('0152', 'a2', [jue-7.17-8.83]).
seccion('0152', 'a3', [jue-7.17-8.83]).
seccion('0152', 'b1', [jue-9.00-10.67]).
seccion('0152', 'b2', [jue-9.00-10.67]).
seccion('0152', 'b3', [jue-9.00-10.67]).
seccion('0152', 'c1', [jue-14.00-15.67]).
seccion('0152', 'c2', [jue-14.00-15.67]).
seccion('0152', 'c3', [jue-14.00-15.67]).
seccion('0152', 'd1', [jue-16.50-18.17]).
seccion('0152', 'd2', [jue-16.50-18.17]).
seccion('0152', 'e1', [jue-18.17-19.83]).
curso('0154', 'fisica 3').
seccion('0154', 'a', [lun-9.00-9.83,mie-9.00-9.83,jue-9.00-9.83,vie-9.00-9.83]).
seccion('0154', 'n', [lun-17.33-18.17,mie-17.33-18.17,jue-17.33-18.17,vie-17.33-18.17]).
seccion('0154', 'p', [lun-18.17-19.00,mie-18.17-19.00,jue-18.17-19.00,vie-18.17-19.00]).
seccion('0154', 'a1', [mar-16.50-18.17]).
seccion('0154', 'a2', [mar-16.50-18.17]).
curso('0156', 'fisica 4').
seccion('0156', 'n', [lun-14.00-14.83,mar-14.00-14.83,mie-14.00-14.83,vie-14.00-14.83]).
seccion('0156', 'p', [lun-18.17-19.00,mar-18.17-19.00,mie-18.17-19.00,vie-18.17-19.00]).
seccion('0156', 'a1', [jue-16.50-18.17]).
curso('0170', 'mecanica analitica 1').
seccion('0170', 'a', [lun-8.00-8.83,mar-8.00-8.83,mie-8.00-8.83,vie-8.00-8.83]).
seccion('0170', 'b+', [lun-12.33-13.17,mar-12.33-13.17,mie-12.33-13.17,vie-12.33-13.17]).
seccion('0170', 'b-', [lun-12.33-13.17,mar-12.33-13.17,mie-12.33-13.17,vie-12.33-13.17]).
seccion('0170', 'n+', [lun-13.17-14.00,mar-13.17-14.00,mie-13.17-14.00,vie-13.17-14.00]).
seccion('0170', 'n-', [lun-13.17-14.00,mar-13.17-14.00,mie-13.17-14.00,vie-13.17-14.00]).
seccion('0170', 'q', [lun-15.67-16.50,mar-15.67-16.50,mie-15.67-16.50,vie-15.67-16.50]).
seccion('0170', 'r', [lun-16.50-17.33,mar-16.50-17.33,mie-16.50-17.33,vie-16.50-17.33]).
seccion('0170', 's', [lun-17.33-18.17,mar-17.33-18.17,mie-17.33-18.17,vie-17.33-18.17]).
curso('0172', 'mecanica analitica 2').
seccion('0172', 'n', [lun-14.83-15.67,mar-14.83-15.67,mie-14.83-15.67,vie-14.83-15.67]).
seccion('0172', 'p', [lun-16.50-17.33,mar-16.50-17.33,mie-16.50-17.33,vie-16.50-17.33]).
curso('0173', 'analisis mecanico').
seccion('0173', 'p', [lun-18.17-19.00,mar-18.17-19.00,mie-18.17-19.00,vie-18.17-19.00]).
curso('0196', 'calidad del aire').
seccion('0196', 'n', [mar-18.17-19.83,jue-18.17-19.83]).
curso('0198', 'calidad del agua').
seccion('0198', 'n', [lun-18.17-19.00,mie-18.17-19.00,vie-18.17-19.00]).
curso('0200', 'ingenieria electrica 1').
seccion('0200', 'n1', [lun-15.67-16.50,mie-15.67-16.50,vie-15.67-16.50]).
seccion('0200', 'n2', [lun-15.67-16.50,mie-15.67-16.50,vie-15.67-16.50]).
seccion('0200', 'n3', [lun-15.67-16.50,mie-15.67-16.50,vie-15.67-16.50]).
seccion('0200', 'q', [lun-17.33-18.17,mie-17.33-18.17,vie-17.33-18.17]).
seccion('0200', 'r', [lun-18.17-19.00,mie-18.17-19.00,vie-18.17-19.00]).
seccion('0200', 's', [lun-19.00-19.83,mie-19.00-19.83,vie-19.00-19.83]).
seccion('0200', '_a', [lun-10.67-12.33]).
seccion('0200', '_b', [mar-10.67-12.33]).
seccion('0200', '_c', [mie-10.67-12.33]).
seccion('0200', '_d', [lun-13.17-14.83]).
seccion('0200', '_e', [mar-13.17-14.83]).
seccion('0200', '_f', [mie-13.17-14.83]).
seccion('0200', '_h', [mar-15.67-17.33]).
seccion('0200', '_j', [jue-15.67-17.33]).
seccion('0200', '_k', [mar-17.33-19.00]).
seccion('0200', '_l', [jue-17.33-19.00]).
seccion('0200', '_m', [mar-19.00-20.67]).
seccion('0200', 'mi', [mar-8.00-12.33]).
seccion('0200', '_n', [mar-18.17-19.83]).
seccion('0200', 'ni', [jue-8.00-12.33]).
seccion('0200', '_o', [jue-19.00-20.67]).
seccion('0200', 'oi', [sab-8.00-12.17]).
seccion('0200', '_p', [sab-8.83-10.50]).
seccion('0200', 'pi', [sab-13.00-17.17]).
seccion('0200', '_q', [sab-10.50-12.17]).
curso('0201', 'instalaciones electricas (civil)').
seccion('0201', 'n', [mar-14.00-15.67,lun-14.00-14.83]).
seccion('0201', 'p', [lun-19.00-19.83,mie-19.00-19.83,vie-19.00-19.83]).
curso('0202', 'ingenieria electrica 2').
seccion('0202', 'n', [lun-16.50-17.33,mie-16.50-17.33,vie-16.50-17.33]).
seccion('0202', 'p', [lun-17.33-18.17,mie-17.33-18.17,vie-17.33-18.17]).
seccion('0202', 'q', [lun-19.00-19.83,mie-19.00-19.83,vie-19.00-19.83]).
seccion('0202', 'r', [lun-16.50-17.33,mie-16.50-17.33,vie-16.50-17.33]).
seccion('0202', 's', [lun-18.17-19.00,mie-18.17-19.00,vie-18.17-19.00]).
seccion('0202', '_a', [mar-13.17-14.83]).
seccion('0202', '_b', [mie-11.50-13.17]).
seccion('0202', '_c', [mie-13.17-14.83]).
seccion('0202', '_d', [lun-17.33-19.00]).
seccion('0202', '_e', [mie-17.33-19.00]).
seccion('0202', '_f', [vie-17.33-19.00]).
seccion('0202', '_g', [mar-19.00-20.67]).
seccion('0202', '_i', [jue-19.00-20.67]).
seccion('0202', '_j', [vie-19.00-20.67]).
seccion('0202', 'mi', [mar-8.00-12.33]).
seccion('0202', 'ni', [jue-8.00-12.33]).
seccion('0202', 'oi', [sab-8.00-12.17]).
seccion('0202', 'pi', [sab-13.00-17.17]).
curso('0204', 'circuitos electricos 1').
seccion('0204', 'a', [lun-9.00-9.83,mie-9.00-9.83,vie-9.00-9.83]).
seccion('0204', 'n', [lun-14.83-15.67,mie-14.83-15.67,vie-14.83-15.67]).
seccion('0204', '_a', [lun-17.33-19.00]).
seccion('0204', '_b', [mar-17.33-19.00]).
seccion('0204', '_c', [mie-17.33-19.00]).
seccion('0204', '_d', [mar-11.50-13.17]).
seccion('0204', '_e', [jue-9.83-11.50]).
seccion('0204', '_f', [jue-11.50-13.17]).
seccion('0204', '_k', [mie-8.00-9.67]).
seccion('0204', '_l', [mie-9.83-11.50]).
curso('0206', 'circuitos electricos 2').
seccion('0206', 'n', [lun-16.50-17.33,mie-16.50-17.33,vie-16.50-17.33]).
seccion('0206', 'p', [lun-16.50-17.33,mie-16.50-17.33,vie-16.50-17.33]).
seccion('0206', '_a', [mar-14.00-15.67]).
seccion('0206', '_b', [mar-15.67-17.33]).
seccion('0206', '_c', [jue-14.00-15.67]).
seccion('0206', '_d', [jue-15.67-17.33]).
curso('0208', 'instalaciones electricas').
seccion('0208', 'n', [lun-17.33-18.17,mie-17.33-18.17,vie-17.33-18.17]).
seccion('0208', '_a', [sab-8.83-10.50]).
seccion('0208', '_b', [sab-10.50-12.17]).
seccion('0208', '_c', [sab-12.17-13.83]).
curso('0209', 'instalacion de equipos electronicos').
seccion('0209', 'n', [lun-19.83-20.67,mie-19.83-20.67,vie-19.83-20.67]).
curso('0210', 'teoria electromagnetica 1').
seccion('0210', 'n', [lun-18.17-19.00,mie-18.17-19.00,vie-18.17-19.00]).
seccion('0210', 'p', [mar-19.00-19.83,jue-19.00-20.67]).
seccion('0210', '_a', [vie-16.50-18.17]).
seccion('0210', '_b', [vie-19.00-20.67]).
seccion('0210', '_c', [sab-7.17-8.83]).
seccion('0210', '_d', [sab-8.83-10.50]).
seccion('0210', '_e', [sab-10.50-12.17]).
curso('0211', 'teoria electromagnetica 2').
seccion('0211', 'n', [mar-19.83-20.67,jue-19.00-20.67]).
curso('0212', 'conversion de energia electromecanica 1').
seccion('0212', 'n', [mar-19.00-19.83,jue-19.00-20.67]).
seccion('0212', '_n', [lun-16.50-18.17]).
seccion('0212', '_p', [mar-17.33-19.00]).
seccion('0212', '_q', [jue-17.33-19.00]).
curso('0213', 'conversion de energia electromecanica 2').
seccion('0213', 'n', [lun-19.83-20.67,mie-19.83-20.67,vie-19.83-20.67]).
curso('0214', 'maquinas electricas').
seccion('0214', 'n', [lun-19.00-19.83,mie-19.00-19.83,vie-19.00-19.83]).
seccion('0214', '_n', [mar-19.00-20.67]).
seccion('0214', '_p', [mie-16.50-18.17]).
seccion('0214', '_r', [jue-19.00-20.67]).
curso('0216', 'subestaciones').
seccion('0216', 'n', [mar-19.83-20.67,jue-19.00-20.67]).
curso('0218', 'lineas de transmision').
seccion('0218', 'n', [lun-19.83-20.67,mie-19.83-20.67,vie-19.83-20.67]).
curso('0219', 'transmision y distribucion').
seccion('0219', 'n', [mar-15.67-16.50,jue-15.67-17.33]).
seccion('0219', '_n', [mar-19.00-20.67,jue-17.33-18.17]).
curso('0220', 'analisis de sistemas de potencia 1').
seccion('0220', 'n', [lun-19.00-19.83,mie-19.00-19.83,vie-19.00-19.83]).
seccion('0220', '_n', [mar-17.33-19.00,jue-19.00-20.67]).
curso('0221', 'sistemas de generacion').
seccion('0221', 'n', [lun-18.17-19.00,mie-18.17-19.00,vie-18.17-19.00]).
curso('0222', 'proteccion de sistemas de potencia').
seccion('0222', 'n', [lun-19.00-19.83,mie-19.00-19.83,vie-19.00-19.83]).
curso('0224', 'alta tension').
seccion('0224', 'n', [mar-18.17-19.83,jue-18.17-19.00]).
seccion('0224', '_n', [sab-8.83-10.50]).
seccion('0224', '_p', [sab-10.50-12.17]).
curso('0230', 'instrumentacion electrica').
seccion('0230', 'n', [lun-16.50-17.33,mie-16.50-17.33,vie-16.50-17.33]).
seccion('0230', 'p', [lun-18.17-19.00,mie-18.17-19.00,vie-18.17-19.00]).
seccion('0230', '_a', [lun-13.17-14.83]).
seccion('0230', '_b', [mar-14.83-16.50]).
seccion('0230', '_c', [mie-13.17-14.83]).
seccion('0230', '_d', [jue-14.83-16.50]).
seccion('0230', '_e', [vie-13.17-14.83]).
curso('0232', 'electronica  1').
seccion('0232', 'n', [lun-19.00-19.83,mie-19.00-19.83,vie-19.00-19.83]).
seccion('0232', '_a', [jue-14.83-15.67]).
seccion('0232', '_b', [mar-14.83-15.67]).
seccion('0232', '_c', [vie-14.00-14.83]).
seccion('0232', '_f', [lun-17.33-18.17]).
seccion('0232', '_g', [vie-16.50-17.33]).
seccion('0232', '_i', [mie-16.50-17.33]).
seccion('0232', '_j', [lun-18.17-19.00]).
curso('0233', 'electronica aplicada 1').
seccion('0233', 'p', [lun-16.50-17.33,mie-16.50-17.33,vie-16.50-17.33]).
curso('0234', 'electronica 4').
seccion('0234', 'p', [lun-17.33-18.17,mie-17.33-18.17,vie-17.33-18.17]).
seccion('0234', '_b', [lun-14.00-14.83]).
seccion('0234', '_c', [lun-14.83-15.67]).
curso('0235', 'robotica').
seccion('0235', 'n', [lun-18.17-19.00,mie-18.17-19.00,vie-18.17-19.00]).
seccion('0235', '_a', [mar-18.17-19.00]).
curso('0236', 'sistemas de control 1').
seccion('0236', 'a', [lun-8.00-8.83,mie-8.00-8.83,vie-8.00-8.83]).
seccion('0236', 'p', [lun-18.17-19.00,mie-18.17-19.00,vie-18.17-19.00]).
seccion('0236', '.a', [lun-10.67-11.50]).
seccion('0236', '_a', [jue-18.17-19.00]).
seccion('0236', '.b', [mie-10.67-11.50]).
seccion('0236', '_b', [mar-18.17-19.00]).
seccion('0236', '.c', [vie-10.67-11.50]).
seccion('0236', '_c', [mie-14.00-14.83]).
seccion('0236', '.e', [lun-16.50-17.33]).
seccion('0236', '_e', [lun-10.67-11.50]).
seccion('0236', '_h', [vie-10.67-11.50]).
curso('0238', 'automatizacion industrial').
seccion('0238', 'n', [mar-16.50-18.17,jue-17.33-18.17]).
seccion('0238', 'p', [mar-18.17-19.83,jue-19.83-20.67]).
seccion('0238', '_n', [mar-19.83-20.67,jue-19.00-20.67]).
seccion('0238', '_p', [sab-7.17-9.67]).
curso('0239', 'electronica aplicada 2').
seccion('0239', 'n', [lun-17.33-18.17,mie-17.33-18.17,vie-17.33-18.17]).
curso('0240', 'electronica 2').
seccion('0240', 'n+', [mar-14.00-15.67,jue-14.00-14.83]).
seccion('0240', 'n-', [mar-14.00-15.67,jue-14.00-14.83]).
seccion('0240', '_a', [lun-14.00-14.83]).
seccion('0240', '_b', [mie-16.50-17.33]).
seccion('0240', '_c', [vie-16.50-17.33]).
curso('0241', 'radiocomunicaciones terrestres').
seccion('0241', 'n', [mar-18.17-19.83,jue-18.17-19.00]).
curso('0242', 'comunicaciones 1').
seccion('0242', 'n', [lun-17.33-18.17,mie-17.33-18.17,vie-17.33-18.17]).
seccion('0242', '_a', [lun-16.50-17.33]).
seccion('0242', '_b', [vie-16.50-17.33]).
curso('0243', 'comunicaciones 4').
seccion('0243', 'n', [mar-17.33-19.00,jue-17.33-18.17]).
seccion('0243', 'p', [lun-19.00-19.83,mie-19.00-19.83,vie-19.00-19.83]).
seccion('0243', '_a', [jue-19.83-20.67]).
seccion('0243', '_b', [mar-19.83-20.67]).
seccion('0243', '_c', [mar-19.83-20.67]).
seccion('0243', '_d', [jue-19.83-20.67]).
curso('0244', 'comunicaciones 2').
seccion('0244', 'p', [mar-19.00-19.83,jue-15.67-17.33]).
seccion('0244', '_b', [mar-14.83-15.67]).
curso('0245', 'comunicaciones 3').
seccion('0245', 'a', [lun-19.00-19.83,mie-19.00-19.83,vie-19.00-19.83]).
seccion('0245', '_a', [lun-16.50-17.33]).
seccion('0245', '_b', [mie-17.33-18.17]).
seccion('0245', '_c', [vie-17.33-18.17]).
curso('0246', 'electronica 3').
seccion('0246', 'n+', [mar-16.50-18.17,jue-17.33-18.17]).
seccion('0246', 'n-', [mar-16.50-18.17,jue-17.33-18.17]).
seccion('0246', '.a', [lun-15.67-16.50]).
seccion('0246', '_a', [lun-11.50-12.33]).
seccion('0246', '.b', [mie-15.67-16.50]).
seccion('0246', '_b', [mie-11.50-12.33]).
seccion('0246', '.c', [vie-15.67-16.50]).
seccion('0246', '_c', [lun-14.83-15.67]).
seccion('0246', '_d', [mie-14.83-15.67]).
seccion('0246', '_f', [vie-14.83-15.67]).
seccion('0246', '_g', [mar-18.17-19.00]).
seccion('0246', '_h', [jue-18.17-19.00]).
curso('0248', 'electronica 5').
seccion('0248', 'n', [mar-16.50-18.17,jue-17.33-18.17]).
seccion('0248', '_a', [lun-12.33-13.17]).
seccion('0248', '_b', [mie-12.33-13.17]).


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

% ORARIO OPTIMO FACULTAD SIN CRUCE DE SECCIONES
% -----------------------------------------
% Definición de member/2
% -----------------------------------------
member(X, [X|_]).
member(X, [_|T]) :- member(X, T).

% -----------------------------------------
% Reglas para horario óptimo
% -----------------------------------------
% overlap(Ini1, Fin1, Ini2, Fin2) es verdadero si los intervalos se traslapan.
overlap(Ini1, Fin1, Ini2, Fin2) :-
    Ini1 < Fin2,
    Ini2 < Fin1.

% conflict(Seccion1, Seccion2)
conflict(Sec1, Sec2) :-
    seccion(Curso1, Sec1, Horarios1),
    seccion(Curso2, Sec2, Horarios2),
    Curso1 \= Curso2,
    member(Day-Ini1-Fin1, Horarios1),
    member(Day-Ini2-Fin2, Horarios2),
    overlap(Ini1, Fin1, Ini2, Fin2).

% compatible/1
compatible([]).
compatible([_]).
compatible([Sec1, Sec2|Resto]) :-
    \+ conflict(Sec1, Sec2),
    compatible([Sec1|Resto]),
    compatible([Sec2|Resto]).

% pick_section(Curso, Seccion)
pick_section(Curso, Sec) :-
    seccion(Curso, Sec, _).

% schedule/2
schedule([], []).
schedule([Curso|Otros], [Sec|OtrasSecs]) :-
    pick_section(Curso, Sec),
    schedule(Otros, OtrasSecs).

% horario_optimo/2
horario_optimo(Cursos, Horario) :-
    schedule(Cursos, Horario),
    compatible(Horario).