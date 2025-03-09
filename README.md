Descripción 

Esta es una aplicación web simple para realizar un sorteo de amigo secreto. Permite agregar nombres de participantes, mostrarlos en una lista y sortear aleatoriamente un nombre para determinar quién será el amigo secreto.

Funcionamiento 

Agregar participantes: El usuario ingresa nombres en un campo de texto y los añade a una lista.

Mostrar la lista: Se actualiza automáticamente la lista con los nombres ingresados.

Sortear amigo secreto: Al hacer clic en el botón de sorteo, se selecciona aleatoriamente un nombre de la lista y se muestra en pantalla.

Lógica del sorteo 

Se genera un número aleatorio con Math.random() que se multiplica por la cantidad de participantes en la lista.

Se redondea con Math.floor() para obtener un índice válido dentro del array.

Se extrae el nombre del participante en la posición generada y se muestra en pantalla.


Funciones principales 

actualizarLista(): Muestra la lista de amigos actualizada en el DOM.

agregarAmigo(): Agrega un nuevo amigo a la lista verificando que no esté vacío ni duplicado.

sortearAmigo(): Selecciona aleatoriamente un nombre de la lista y lo muestra en la pantalla.


Tecnologías utilizadas 

HTML: Estructura de la página.

CSS: Diseño y estilos.

JavaScript: Lógica e interactividad.


Cómo usarlo 

Abre el archivo index.html en un navegador.

Escribe los nombres de los participantes y haz clic en "Añadir".

Una vez agregados todos los amigos, presiona "Sortear amigo".

Se mostrará el nombre del amigo secreto seleccionado al azar.
