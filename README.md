# DepartamentosEnNewYork

Sitio estático listo para GitHub + Vercel.

## Qué incluye

- `index.html`
- `vercel.json`
- `data/properties.js`
- `data/properties.backup.json`
- `assets/images/departments/` con carpetas reales por unidad

## Carpetas creadas

- `35-206-1/`
- `35-206-2/`
- `35-206-3/`
- `35-206-4/`
- `35-208-1/`
- `35-208-2/`
- `35-208-3/`
- `35-208-4/`
- `MAD-1A/`
- `MAD-1B/`
- `MAD-1C/`
- `MAD-2A/`
- `MAD-2B/`
- `MAD-2C/`
- `MAD-3A/`
- `MAD-3C/`
- `MAD-4A/`
- `MAD-4B/`
- `MAD-4C/`
- `31-108-3/`
- `31-108-4/`
- `31-106-1A/`
- `31-106-2A/`
- `31-106-3A/`
- `31-106-3B/`
- `Church-2/`
- `Church-3/`
- `Church-4/`
- `120-58-3C/`
- `120-58-5C/`
- `120-58-4D/`
- `712W-175/`

## Unidades con datos incompletos

Estas carpetas sí fueron creadas, pero en la tabla no encontré todos los datos:
- `35-206-4`
- `31-106-1A`
- `712W-175`

## Observación

En tu tabla apareció `31-108-2`, pero no estaba en la lista inicial de nombres internos, así que no la agregué para no mezclar inventario.

## Cómo reemplazar las fotos

Dentro de cada carpeta hay placeholders `.txt`.
Borrá esos `.txt` y subí tus archivos reales con estos nombres exactos:

- `cover.jpg`
- `1.jpg`
- `2.jpg`
- `3.jpg` opcional

## Cómo editar propiedades

Abrí `data/properties.js` y completá:
- `price`
- `zone` si querés refinarla
- `video` si querés URL externa
- cualquier texto comercial adicional


## Cambios en v3

- La web muestra nombres comerciales.
- El código interno se conserva como `internalCode`.
- El código interno solo aparece como referencia en el modal.
