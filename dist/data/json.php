<?php
sleep(1);
$prd = $_POST['prd'];
switch ($prd) {
    case "prd1":
        $json = array (
            "name"  => "Acer Aspire E1-572",
            "price"  => 399.00,
            "os"  => "Windows 8.1",
            "dimensions"  => array (
                "l" => 380,
                "d" => 27,
                "w" => 255
            ),
            "weight"  => 2.193,
            "transportWeight"  => 2.47,
            "processor"  => "Intel Core i5-4200U",
            "processorSpeed"  => 1.6,
            "ram"  => 4,
            "typeOfStorage"  => "Spinning HD 5400",
            "storageCapacity"  => 500
        );
        break;
    case "prd2":
        $json = array (
            "name"  => "Acer Aspire S3-392G",
            "price"  => 899.99,
            "os"  => "Windows 8.1",
            "dimensions"  => array (
                "l" => 221,
                "d" => 17,
                "w" => 124
            ),
            "weight"  => 1.618,
            "transportWeight"  => 1.97,
            "processor"  => "Intel Core i5-4200U",
            "processorSpeed"  => 1.6,
            "ram"  => 4,
            "typeOfStorage"  => "Spinning HD 5400",
            "storageCapacity"  => 500
        );
        break;
    case "prd3":
        $json = array (
            "name"  => "Acer Aspire V5-573",
            "price"  => 599.95,
            "os"  => "Windows 8.1",
            "dimensions"  => array (
                "l" => 377,
                "d" => 23,
                "w" => 255
            ),
            "weight"  => 2.045,
            "transportWeight"  => 2.46,
            "processor"  => "Intel Core i7-4500U",
            "processorSpeed"  => 1.8,
            "ram"  => 8,
            "typeOfStorage"  => "Spinning HD 5400",
            "storageCapacity"  => 1000
        );
        break;
    case "prd4":
        $json = array (
            "name"  => "Acer V5-552",
            "price"  => 479.99,
            "os"  => "Windows 8.0",
            "dimensions"  => array (
                "l" => 378,
                "d" => 24,
                "w" => 254
            ),
            "weight"  => 2,
            "transportWeight"  => 2.41,
            "processor"  => "AMD A10-5757M",
            "processorSpeed"  => 2.1,
            "ram"  => 6,
            "typeOfStorage"  => "Spinning HD 5400",
            "storageCapacity"  => 1000
        );
        break;
    case "prd5":
        $json = array (
            "name"  => "Apple MacBook Air 11-inch (2013)",
            "price"  => 585.00,
            "os"  => "OSX 10.8.4",
            "dimensions"  => array (
                "l" => 299,
                "d" => 13.4,
                "w" => 192
            ),
            "weight"  => 1.079,
            "transportWeight"  => 1.39,
            "processor"  => "Intel Core i5-4250U",
            "processorSpeed"  => 1.3,
            "ram"  => 4,
            "typeOfStorage"  => "SSD",
            "storageCapacity"  => 128
        );
        break;
    case "prd6":
        $json = array (
            "name"  => "Apple MacBook Air 13-inch (2013)",
            "price"  => 669.99,
            "os"  => "OSX 10.8.4",
            "dimensions"  => array (
                "l" => 325,
                "d" => 12.6,
                "w" => 227
            ),
            "weight"  => 1.328,
            "transportWeight"  => 1.64,
            "processor"  => "Intel Core i5-4250U",
            "processorSpeed"  => 1.3,
            "ram"  => 4,
            "typeOfStorage"  => "SSD",
            "storageCapacity"  => 128
        );
        break;
    case "prd7":
        $json = array (
            "name"  => "Apple Macbook Pro Retina 13-inch (2013)",
            "price"  => 856.39,
            "os"  => "Mac OS 10.9",
            "dimensions"  => array (
                "l" => 314,
                "d" => 17.8,
                "w" => 219
            ),
            "weight"  => 1.566,
            "transportWeight"  => 1.94,
            "processor"  => "Intel Core i5-4258U",
            "processorSpeed"  => 2.4,
            "ram"  => 4,
            "typeOfStorage"  => "SSD",
            "storageCapacity"  => 128
        );
        break;
    case "prd8":
        $json = array (
            "name"  => "Apple Macbook Pro Retina 15-inch (2013)",
            "price"  => 1338.00,
            "os"  => "Mac OS 10.9",
            "dimensions"  => array (
                "l" => 359,
                "d" => 18,
                "w" => 247
            ),
            "weight"  => 1.997,
            "transportWeight"  => 2.37,
            "processor"  => "Intel Core i7-4750HQ",
            "processorSpeed"  => 2,
            "ram"  => 8,
            "typeOfStorage"  => "SSD",
            "storageCapacity"  => 256
        );
        break;
}
echo json_encode($json);
?>