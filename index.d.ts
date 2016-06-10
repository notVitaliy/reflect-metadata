declare namespace Reflect {
    function getMetadata(metadataKey: any, target: any, propertyKey?: PropertyKey): any;
    function defineMetadata(metadataKey: any, metadataValue: any, target: Object): void;
}