<?php
// ini_set('error_reporting', E_ALL);
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);

if(empty($_REQUEST['action'])) exit('unresolve');

// Подключаем
define('MODX_API_MODE', true);
require '../../index.php';

// Включаем обработку ошибок
$modx->getService('error','error.modError');
$modx->setLogLevel(modX::LOG_LEVEL_INFO);
$modx->setLogTarget(XPDO_CLI_MODE ? 'ECHO' : 'HTML');

switch($_REQUEST['action']){
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
}

if (is_array($output)) {
	$output = $modx->toJSON($output);
}

@session_write_close();
exit($output);