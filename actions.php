<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

if (empty($_REQUEST['action'])) {
    die('Access denied');
} else {
    $action = $_REQUEST['action'];
}

// Подключаем
define('MODX_API_MODE', true);
require '../../index.php';

// Включаем обработку ошибок
$modx->getService('error', 'error.modError');
$modx->getRequest();
$modx->setLogLevel(modX::LOG_LEVEL_ERROR);
$modx->setLogTarget('FILE');
$modx->error->message = null;

$modx->switchContext('web');

define('MODX_ACTION_MODE', true);
$Favorites = $modx->getService('nemopro', 'Favorites', $modx->getOption('nemopro.core_path', null, $modx->getOption('core_path') . 'components/nemopro/') . 'model/nemopro/');
if ($modx->error->hasError() || !($Favorites instanceof Favorites)) {
    die('Error');
}

switch($_REQUEST['action']){
    case 'favorites/add':
        $response = $Favorites->add((int)$_REQUEST['id']);
        break;
    case 'favorites/remove':
        $response = $Favorites->remove((int)$_REQUEST['id']);
        break;
    case 'get/autocomplete/city':
        /** @var gl $gl */
        // if (!$gl = $modx->getService('gl', 'gl',
        //     $modx->getOption('gl_core_path', null, $modx->getOption('core_path') . 'components/gl/') . 'model/gl/',
        //     $scriptProperties)
        // ) {
        //     return 'Could not load gl class!';
        // }

        // $q = $modx->newQuery('glCity');
        // $q->where($where);
        // // $q->limit($limit, $offset);
        // // $q->sortby($sortby, $sortdir);
        // $q->select($modx->getSelectColumns('glCity', 'glCity'));
        // if ($q->prepare() AND $q->stmt->execute()) {
        //     $rows = $q->stmt->fetchAll(PDO::FETCH_ASSOC);
        // }
        // $output = $modx->runSnippet('gl.location', [
        //     'limit' => 0
        // ]);
        
        
        // echo '<pre>';
        // print_r($rows);
        // echo '</pre>';
        // foreach ($rows as $row) {
        //     $row['idx'] = $idx++;
        //     $row['class'] = $class;
        //     $output[] = $gl->getChunk($tpl, $row);
        // }
        // $output = [[
        //     'label' => 'France',
        //     'value' => 'France'
        // ], [
        //     'label' => 'United States',
        //     'value' => 'United States'
        // ], [
        //     'label' => 'Germany',
        //     'value' => 'Germany'
        // ]];
        
        break;
    case 'order/cancel':
        $miniShop2 = $modx->getService('miniShop2');
        $miniShop2->initialize($modx->context->key);
        $params = array_merge($_POST, []);
        $response = [];
        $order = $modx->getObject('msOrder', (int)$params['id']);
        $data = $miniShop2->changeOrderStatus($order->get('id'), 4);
        if ($order && $data) {
            $response['order'] = $order->toArray();
            $response['success'] = true;
        } else {
            $response = ['success' => false];
        }
        break;
    case 'order/cart':
        $miniShop2 = $modx->getService('miniShop2');
        $miniShop2->initialize($modx->context->key);
        $params = array_merge($_POST, []);
        $response = [];
        $order = $modx->getObject('msOrder', (int)$params['id']);
        $products = $order->getMany('Products');
        if ($order && $products) {
            $response['order'] = $order->toArray();

            foreach ($products as $product) {
                $miniShop2->cart->add($product->get('product_id'), $product->get('count'), $product->get('options'));
                $response['products'][] = $product->toArray();
            }

            $response['cart'] = $miniShop2->cart->status();
            $response['success'] = true;
        } else {
            $response = ['success' => false];
        }
        break;
    case 'order/pay':
        $miniShop2 = $modx->getService('miniShop2');
        $miniShop2->initialize($modx->context->key);
        $params = array_merge($_POST, []);
        $response = [];
        $order = $modx->getObject('msOrder', (int)$params['id']);
        $payment = $order->getOne('Payment');
        if ($order && $payment) {
            $data = $payment->send($order);
            if (!empty($data['data']['redirect'])) {
                $response['redirect'] = $data['data']['redirect'];
            }
            $response['order'] = $order->toArray();
            $response['success'] = true;
        } else {
            $response = ['success' => false];
        }
        break;
}

if (is_array($response)) {
    $response = json_encode($response);
}

@session_write_close();
exit($response);
