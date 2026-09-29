const modal=document.getElementById('modal'), content=document.getElementById('modalContent');
const docs={
p1928:`<span class="stamp">ARCHIVO HISTÓRICO</span><h2>Temporada inaugural · 1928</h2><p><b>TEATRO VELASCO</b><br>Programa de apertura</p><hr><p>Una nueva sala dedicada al arte dramático, la música y las compañías de variedades abre sus puertas al público.</p><p>Documento digitalizado del acervo del Teatro Velasco.</p>`,
p1930:`<span class="stamp">PROGRAMA DE MANO</span><h2>Romeo y Julieta</h2><p><b>Temporada 1930</b></p><hr><p>Tragedia de William Shakespeare.<br>Presentada por compañía invitada.</p><p>Localidades: Luneta · Palcos · Galería</p>`,
p1946:`<span class="stamp">COMUNICADO</span><h2>Suspensión temporal de funciones</h2><p>17 de septiembre de 1946</p><hr><p>La administración del Teatro Velasco informa que el recinto permanecerá temporalmente cerrado debido a trabajos de mantenimiento en escenario y talleres.</p><p><i>Se anunciará oportunamente la fecha de reapertura.</i></p>`};
function openDoc(html){content.innerHTML=html;modal.classList.add('open')}
document.querySelectorAll('[data-modal]').forEach(b=>b.onclick=()=>openDoc(docs[b.dataset.modal]));
document.getElementById('more46').onclick=()=>openDoc(docs.p1946);
document.getElementById('close').onclick=()=>modal.classList.remove('open'); modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
document.getElementById('restricted').onclick=()=>{const key=prompt('ARCHIVO 27-B · Introduzca clave de consulta');if((key||'').trim()==='1947'){openDoc(`<span class="stamp">NO CATALOGADO</span><h2>Inventario de reapertura</h2><p>Enero de 1947 · Documento 27-B</p><hr><p>Escenografía: 17 piezas<br>Vestuario: 84 piezas<br>Utilería: 126 piezas<br><b>Figuras de teatro: 3 piezas</b></p><p>Procedencia: <b>NO REGISTRADA</b></p><hr><p style="font-family:monospace">Nota manuscrita: “No retirar del taller.”</p>`)}else{const w=document.getElementById('whisper');w.textContent='ACCESO DENEGADO';w.classList.remove('show');void w.offsetWidth;w.classList.add('show')}};
let taps=0;document.querySelector('.monogram').onclick=()=>{taps++;if(taps===5){const w=document.getElementById('whisper');w.textContent='EL ARCHIVO DE 1946 ESTÁ INCOMPLETO.';w.classList.add('show');taps=0}};

// Visor de imágenes del archivo fotográfico
const lightbox=document.createElement('div');
lightbox.className='image-lightbox';
lightbox.innerHTML='<button aria-label="Cerrar">×</button><img alt="Documento ampliado">';
document.body.appendChild(lightbox);
const lbImg=lightbox.querySelector('img');
document.querySelectorAll('.archive-photo img,.archive-poster img').forEach(img=>img.addEventListener('click',()=>{lbImg.src=img.src;lbImg.alt=img.alt;lightbox.classList.add('open')}));
lightbox.querySelector('button').addEventListener('click',()=>lightbox.classList.remove('open'));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.classList.remove('open')});
