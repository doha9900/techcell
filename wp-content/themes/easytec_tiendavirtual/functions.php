<?php

function easytec_admin_estilos() {
    wp_enqueue_style('admin-estilos', get_stylesheet_directory_uri() . '/login/login.css');

}
add_action('login_enqueue_scripts', 'easytec_admin_estilos');

function easytec_redireccionar_admin() {
    return home_url();
}
add_filter('login_headerurl', 'easytec_redireccionar_admin');

// Productos por página
add_filter('loop_shop_per_page', 'easytec_productos_por_pagina', 20);
function easytec_productos_por_pagina($productos){
    $productos = 9;
    return $productos;
}

// Columnas por página en la tienda
add_filter('loop_shop_columns', 'easytec_columnas', 20);
function easytec_columnas($columnas) {
    return 4;
}

// Cambiar a Divisa Sol Peruano (PEN)
add_filter('woocommerce_currency_symbol', 'easytec_pen', 10, 2);

function easytec_pen($simbolo, $moneda){
    $simbolo = 'PEN S/';
    return $simbolo;
}

// Modificar los créditos del footer
function easytec_creditos() {
    remove_action('storefront_footer', 'storefront_credit', 20);
    add_action('storefront_after_footer', 'easytec_nuevo_footer', 20);
}
add_action('init', 'easytec_creditos');

function easytec_nuevo_footer() {
    echo "<div class='reservados'>";
    echo 'Derechos Reservados &copy; ' . get_bloginfo('name') . " " . get_the_date('Y');
    echo "</div>";
}

//Agregar imagen al homepage

// function easytec_descuento() {
//    $imagen = '<div class="destacada">';
//    $imagen .= '<img src="' . get_stylesheet_directory_uri() . '/img/CuponCompu.png">';
//    $imagen .= '</div>';
//    echo $imagen;
// }
// add_action('homepage', 'easytec_descuento', 5);

// Crear nueva sección en el Home
add_action('homepage', 'easytec_accesoriocomputo_homepage', 30);
function easytec_accesoriocomputo_homepage() {
    echo "<div class='accesorio-de-computo'>";
    echo "<div class='imagen-categoria'>";
    $imagen = get_woocommerce_term_meta(19, 'thumbnail_id', true);
    $imagen_categoria = wp_get_attachment_image_src($imagen, 'full');
    if($imagen_categoria){
        echo "<div class='imagen-destacada' style='background-image:url(" . $imagen_categoria[0] . ")'></div>";
        echo "<h1>Accesorio de Computo</h1>";
        echo "</div>";
    }
    echo "<div class='productos'>";
    echo do_shortcode('[product_category columns="3" category="accesorio-de-computo"]');
    echo "</div>";
    echo "</div>";
}

//Mostrar 4 Categorías en el Homepage
function easytec_categories($args) {
    $args['limit'] = 4;
    $args['columns'] = 4;
    return $args;
}
add_filter('storefront_product_categories_args', 'easytec_categories', 100);

// Cambiar texto a filtro

add_filter('woocommerce_catalog_orderby', 'easytec_cambiar_sort', 40, 1);
function easytec_cambiar_sort($filtro) {
    $filtro['date'] = __('Nuevos productos primero', 'woocommerce');
    return $filtro;
}

// Remove Tabs
/*
add_filter('woocommerce_product_tabs', 'easytec_remover_tabs', 11, 1);
function easytec_remover_tabs($tabs) {
    unset($tabs['description']);
    return $tabs;
}
*/

/** Mostrar Add This **/
/*
function easytec_mostrar_botones_compartir() { ?>
    <div class="addthis_inline_share_toolbox_emjo"></div>
<?php
}
add_action('woocommerce_after_add_to_cart_form', 'easytec_mostrar_botones_compartir');

function easytec_incluir_script_addthis() { ?>
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-61d900a264962631"></script>
<?php
}
add_action('wp_footer', 'easytec_incluir_script_addthis');
*/

//Mostrar descuento en cantidad
/*
add_filter('woocommerce_get_price_html', 'easytec_cantidad_ahorrada', 10, 2);
function easytec_cantidad_ahorrada($precio, $producto) {
    if($producto->sale_price){
        $ahorro = wc_price($producto->regular_price - $producto->sale_price);
        return $precio . sprintf( __('<span class="ahorro"> Ahorro %s </span>', 'woocommerce' ), $ahorro);
    }
    return $precio;
}
*/
/*
add_filter('woocommerce_get_price_html', 'easytec_cantidad_ahorrada_porcentaje', 10, 2);
function easytec_cantidad_ahorrada_porcentaje($precio, $producto) {
    if($producto->sale_price){
        $porcentaje = round((($producto->regular_price - $producto->sale_price) / $producto->regular_price) * 100);
        return $precio . sprintf( __('<span class="ahorro"> Ahorro %s &#37;</span>', 'woocommerce'), $porcentaje);
    }
    return $precio;
}
*/

// Muestra el Ahorro en Porcentaje o e Dinero
function easytec_mostrar_ahorro($precio, $producto) {
    $precio_regular = $producto->get_regular_price();

    if($producto->sale_price){
        if($precio_regular < 100) {
            $porcentaje = round((($producto->regular_price - $producto->sale_price) / $producto->regular_price) * 100);
            return $precio . sprintf( __('<br> <span class="ahorro"> Ahorro: %s &#37;</span>', 'woocommerce'), $porcentaje);
        } else {
            $ahorro = wc_price($producto->regular_price - $producto->sale_price);
            return $precio . sprintf( __('<br> <span class="ahorro"> Ahorro: %s </span>', 'woocommerce' ), $ahorro);
        }
    }
    return $precio;
}
add_filter('woocommerce_get_price_html', 'easytec_mostrar_ahorro', 10, 2);

// Cambiar Tab Descripción por el Título del Producto
add_filter('woocommerce_product_tabs', 'easytec_titulo_tab_descripcion', 10, 1);
function easytec_titulo_tab_descripcion($tabs) {
    global $post;
    if(isset($tabs['description']['title'])) {
        $tabs['description']['title'] = $post->post_title;
    }
    return $tabs;
}

add_filter('woocommerce_product_description_heading', 'easytec_titulo_contenido_tab', 10, 1);
function easytec_titulo_contenido_tab($titulo) {
    global $post;
    return $post->post_title;
}

// Imprimir Subtítulo con Advanced Custom Fields
add_action('woocommerce_single_product_summary', 'easytec_imprimir_subtitulo', 6);
function easytec_imprimir_subtitulo() {
    global $post;
    echo "<p class='subtitulo'>" . get_field('subtitulo', $post->ID) . "</p>";
}

// Nuevo Tab para Video con ACF
add_filter('woocommerce_product_tabs', 'easytec_agregar_tab_video', 11, 1);
function easytec_agregar_tab_video($tabs) {
    $tabs['video'] = array(
        'title' => 'Video',
        'priority' => 15,
        'callback' => 'easytec_video'
    );
    return $tabs;
}
function easytec_video() {
    global $post;
    $video = get_field('video', $post->ID);
    if($video) {
        echo "<video controls autoplay loop>";
        echo "<source src='" . $video . "'>";
        echo "</video>";
    } else {
        echo "No hay video disponible";
    }
}

// Boton para Vaciar el carrito
add_action('woocommerce_cart_actions', 'easytec_limpiar_carrito');
function easytec_limpiar_carrito() {
    echo '<a class="button" href="?vaciar-carrito=true">' . __('Vaciar Carrito', 'woocommerce') . '</a>';
}
// Vaciar el carrito
add_action('init', 'easytec_vaciar_carrito');
function easytec_vaciar_carrito() {
    if(isset($_GET['vaciar-carrito'])) {
        global $woocommerce;
        $woocommerce->cart->empty_cart();
    }
}

// Imprimir banner de ACF en el Carrito
add_action('woocommerce_check_cart_items', 'easytec_imprimir_banner_carrito', 10);
function easytec_imprimir_banner_carrito() {
    global $post;
    $imagen = get_field('imagen', $post->ID);
    if($imagen) {
        echo "<div class='cupon-carrito'>";
        echo "<img src='" . $imagen . "'>";
        echo "</div>";
    }
}

//Eliminar un campo del Checkout
add_filter('woocommerce_checkout_fields', 'easytec_remover_telefono_checkout', 20, 1);
function easytec_remover_telefono_checkout($campos) {
    unset($campos['billing']['billing_phone']);
    $campos['billing']['billing_email']['class'] = array('form-row-wide');
    return $campos;
}

// Agregar Campo en Checkout
add_filter('woocommerce_checkout_fields', 'easytec_ruc', 40);
function easytec_ruc($campos) {
    $campos['billing']['factura'] = array(
        'css' => array('form-row-wide'),
        'label' => '¿Requiere Factura?',
        'type' => 'checkbox',
        'id' => 'factura'
    );
    $campos['billing']['ruc'] = array(
        'css' => array('form-row-wide'),
        'label' => 'RUC'
    );
    $campos['order']['escuchaste_nosotros'] = array(
        'type' => 'select',
        'css' => array('form-row-wide'),
        'label' => '¿Cómo te enteraste de nosotros?',
        'options' => array(
            'default' => 'Seleccione...',
            'tv' => 'TV',
            'radio' => 'Radio',
            'periodico' => 'Periódico',
            'internet' => 'Internet',
            'facebook' => 'Facebook'
        )
    );
    return $campos;
}

/** Ocultar / Mostrar en Checkout el RUC **/
function easytec_mostrar_RUC() {
    if(is_checkout()) { ?>
        <script>
            jQuery(document).ready(function() {
                jQuery('input[type="checkbox"]#factura').on('change', function() {
                    jQuery('#ruc_field').slideToggle();
                });
            })
        </script>
    <?php }
}
add_action('wp_footer', 'easytec_mostrar_RUC');

// Insertar campos personalizados en base de datos en Checkout
add_action('woocommerce_checkout_update_order_meta', 'easytec_insertar_campos_personalizados');
function easytec_insertar_campos_personalizados($orden_id) {
    if(!empty($_POST['ruc'])) {
        update_post_meta($orden_id, 'RUC', sanitize_text_field($_POST['ruc']));
    }
    if(!empty($_POST['factura'])) {
        update_post_meta($orden_id, 'factura', sanitize_text_field($_POST['factura']));
    }
    if(!empty($_POST['escuchaste_nosotros'])) {
        update_post_meta($orden_id, 'escuchaste_nosotros', sanitize_text_field($_POST['escuchaste_nosotros']));
    }
}

/** Agregar columnas personalizadas a las Órdenes **/
add_filter('manage_edit-shop_order_columns', 'easytec_columnas_ordenes');
function easytec_columnas_ordenes($columnas) {
    $columnas['factura'] = __('Factura', 'woocommerce');
    $columnas['ruc'] = __('RUC', 'woocommerce');
    $columnas['escuchaste_nosotros'] = __('Escuchaste Nosotros', 'woocommerce');
    return $columnas;
}

/** Mostrar contenido dentro de las columnas **/
add_action('manage_shop_order_posts_custom_column', 'easytec_columnas_informacion', 2);
function easytec_columnas_informacion($columnas) {
    global $post, $woocommerce, $order;

    // Obtiene los valores de la orden (se pasa el ID de la orden)
    if(empty($order) || $order->id != $post->ID) {
        $order = new WC_Order($post->ID);
    }

    if($columnas === 'factura') {
        $factura = get_post_meta($post->ID, 'factura', true);
        if($factura) {
            echo "Sí";
        }
    }
    if($columnas === 'ruc') {
        echo get_post_meta($post->ID, 'RUC', true);
    }
    if($columnas === 'escuchaste_nosotros') {
        echo get_post_meta($post->ID, 'escuchaste_nosotros', true);
    }
}

// Mostrando los campos personalizados en pedidos
add_action('woocommerce_admin_order_data_after_billing_address', 'easytec_mostrar_informacion_ordenes');
function easytec_mostrar_informacion_ordenes($pedido) {
    $factura = get_post_meta($pedido->ID, 'factura', true);
    if($factura) {
        echo '<p><strong>' . __('Factura', 'woocommerce') . ':</strong> Sí </p>';
        echo '<p><strong>' . __('RUC', 'woocommerce') . ':</strong> ' . get_post_meta($pedido->ID, 'RUC', true) . '</p>';      
    }
    echo '<p><strong>' . __('Escuchaste Nosotros', 'woocommerce') . ':</strong> ' . get_post_meta($pedido->ID, 'escuchaste_nosotros', true) . '</p>';
}

/* Mostrar iconos de características de la tienda */
function easytec_mostrar_iconos() { ?>
            </main>
        </div><!--.#primary-->
    </div><!--.col-full-->
    <div class="iconos-inicio">
        <div class="col-full">
            <div class="columns-4">
                <?php the_field('icono_1'); ?>
                <p><?php the_field('descripcion_icono_1'); ?></p>
            </div>
            <div class="columns-4">
                <?php the_field('icono_2'); ?>
                <p><?php the_field('descripcion_icono_2'); ?></p>
            </div>
            <div class="columns-4">
                <?php the_field('icono_3'); ?>
                <p><?php the_field('descripcion_icono_3'); ?></p>
            </div>
        </div>
    </div>

    <div class="col-full">
        <div class="content-area">
            <div class="site-main">
<?php
}
add_action('homepage', 'easytec_mostrar_iconos', 15);

// Mostrar imagen cuando no haya imagen destacada
function easytec_no_imagen_destacada($imagen_url) {
    $imagen_url = get_stylesheet_directory_uri() . '/img/no-image.png';
    return $imagen_url;
}
add_filter('woocommerce_placeholder_img_src', 'easytec_no_imagen_destacada');

/* Imprimir entradas de blog en el Inicio */
function easytec_entradas_blog() {
    $args = array(
        'post_type' => 'post',
        'post_per_page' => 3,
        'orderby' => 'date',
        'order' => 'DESC'
    );
    $entradas = new WP_Query($args); ?>
    <div class="entradas-blog">
        <h2 class="section-title">Últimas entradas del blog</h2>
        <ul>
            <?php while($entradas->have_posts()): $entradas->the_post(); ?>
                <li>
                    <?php the_post_thumbnail('shop_catalog'); ?>
                    <?php the_title('<h3>', '</h3>'); ?>
                    <div class="contenido-entrada">
                        <header class="encabezado-entrada">
                            <p>Por: <?php the_author(); ?> | <?php the_time(get_option('date_format')); ?>
                        </header>
                        <?php
                            $contenido = wp_trim_words(get_the_content(), 20, '');
                            echo $contenido;
                            
                        ?>
                        <footer class="footer-entrada">
                            <a href="<?php the_permalink(); ?>" class="button enlace-entrada">Ver más &raquo;</a>
                        </footer>
                    </div>
                </li>

            <?php endwhile; wp_reset_postdata(); ?>
        </ul>
    </div>

<?php
}
add_action('homepage', 'easytec_entradas_blog', 80);

/* Productos Relacionados **/
function easytec_productos_relacionados() {
    global $post;
    $productos_relacionados = get_field('productos_relacionados', $post->ID);

    if($productos_relacionados): ?>
        <div class="productos_relacionados">
            <h2 class="section-title">Productos Relacionados</h2>
            <?php $ids = join($productos_relacionados, ', '); ?>
            <?php echo do_shortcode('[products ids="'.$ids.'" columns="8"]') ?>
        </div>

    <?php endif;
}
add_action('storefront_post_content_after', 'easytec_productos_relacionados');

// Imprime Shortcode con Slider
function easytec_slider() {
    echo do_shortcode('[wcslider]');
}
add_action('homepage', 'easytec_slider', 5);
