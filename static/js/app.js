let datasets = [] 
function sink(dataset) {
  datasets.push(dataset);
}

var app = angular.module('prototypeApp', ['kubernetesUI'])

app.controller('GraphCtrl', function($scope) {
  var index = 0;
  $scope.data = datasets[index];
  $scope.manifestData = { }
  $scope.kinds = {
    Pod: '#vertex-Pod',
    ReplicationController: '#vertex-ReplicationController',
    Node: '#vertex-Node',
    Service: '#vertex-Service',
    ReplicaSet: '#vertex-ReplicaSet',
    Container: '#vertex-Container'
  };

  $scope.topologyForce = d3.layout
    .force()
    .charge(-900)
    .gravity(0.25)
    .linkDistance(100);
  
  $scope.switch = function() {
    index += 1;
    $scope.data = datasets[index % datasets.length];
  };

  $scope.info = function(thing) {
    console.log($scope)
  }

  $scope.$on("select", function(ev, item) {
    var text, kind, metadata, name
    var selected = angular.element(document.getElementById("selected"))
    var manifestJs = document.getElementById('manifest')
    var manifest = angular.element(manifestJs)
    var manifestName = angular.element(document.getElementById("manifest-name"))
    var manifestKind = angular.element(document.getElementById("manifest-kind"))
    var manifestMetadata = angular.element(document.getElementById("manifest-metadata"))
    var manifestSpec = angular.element(document.getElementById("manifest-spec"))
    console.log(ev)
    if (item) {
      metadata = item.metadata
      spec = item.spec   
      name = metadata.name
      kind = item.kind
      selected.text(text);
      $scope.manifestData = metadata

      manifestName.text(name)
      manifestKind.text(kind)
      manifestMetadata.text(JSON.stringify(metadata))
      manifestSpec.text(JSON.stringify(spec))
      manifest[0].classList = [`${item.kind} visible panel-view panel`]



      $scope.$apply()
    } else {
      manifest[0].classList = ['panel']
      // manifest[0].innerText = ''
    }
  });
});