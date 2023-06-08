# backend
Backend escrito con IsaliaPHP

## Motivación
El backend escrito en IsaliaPHP es una herramienta para no arrancar desde cero en la que se incluyen usuarios, perfiles, recursos, menus, registro de accesos, empresas.

## Configuración
Para utilizar este proyecto es necesario cargar el script básico de la base de datos que se encuentra en la raíz del repositorio con el nombre **backend.sql**. El diagrama de la base de datos puede verse en el archivo **diagrama-db.png** junto al script de la base de datos.
Utiliza una base de datos MySQL (o MariaDB)

## Conectar la aplicación con la base de datos
Para realizar la configuración de la conexión a la base de datos es necesario ir a la clase Config que está alojada en App\Libs
En ella debemos modificar las constantes
- CONNECTION_STRING
- USER
- PASSWORD

## Usuarios
Los usuarios creados son los siguientes:
- admin, con clave admin (tiene el perfil de Admin)
- nelson, con clave secret (tiene el perfil de Auditor)

## Temas a tener en cuenta
La configuración de la aplicación comienza con la tabla empresa. En ella se definen las diferentes empresas que podrían hacer uso de este sistema. De la empresa se enlazan los usuarios (tabla usuario) y los menús (tabla menu)

Por otro lado, los usuarios tienen asignado un perfil (desde la tabla perfil), y los perfiles tienen asignados recursos (en la tabla recurso)

El control de acceso (ACL) se hace en base a los recursos, porque estos se definen a nivel de la combinación "controlador/acción".

Se pueden usar el comodín asterisco para definir "todos los controladores" y "todas las acciones"

Por ejemplo, el perfil Admin tiene asociado como recurso */*, es decir, todos los controladores, todas las acciones.
En cambio, el perfil Auditor, sólo tiene acceso al recurso Accesos/* y a Usuarios/*

La definición de los recursos debe hacerse usando el nombre del controlador con su nombre (sin el sufijo controller) y en la acción el nombre del método o función del controlador que queremos habilitar.

Cualquier combinación que no esté asignada al perfil del usuario enviará una vista de "No tiene permiso sobre el recurso"

## Información de uso
El autor no da garantías implícitas ni explícitas sobre el código aquí entregado, y no se hace responsable de lo que los usuarios puedan hacer con él. Aunque está pensado y hecho con buenas intenciones, es el usuario final quien debe velar por la seguridad del código.
