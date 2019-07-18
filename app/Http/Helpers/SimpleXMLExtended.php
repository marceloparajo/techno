<?php

namespace App\Http\Helpers;

class SimpleXMLExtended extends \SimpleXMLElement
{
    public function addCData($cdata_text)
    {
        $node = dom_import_simplexml($this);
        $no   = $node->ownerDocument;
        $node->appendChild($no->createCDATASection($cdata_text));
    }

    /**
     * @param $name
     * @param null $value
     * @param string $namespace
     * @return \SimpleXMLElement
     */
    public function addChildWithCDATA($name, $value = NULL, $namespace = null)
    {
        $new_child = $this->addChild($name, '', $namespace);
        if ($new_child !== NULL) {
            $node = dom_import_simplexml($new_child);
            $no   = $node->ownerDocument;
            $node->appendChild($no->createCDATASection($value));
        }
        return $new_child;
    }
}