let datasets = [] 
function sink(dataset) {
  datasets.push(dataset);
}

console.log(moment())
var app = angular.module('prototypeApp', ['kubernetesUI'])

app.controller('GraphCtrl', function($scope) {
  var index = 0;
  $scope.data = datasets[index]
  // initialize data
  $scope.manifestData = { }
  $scope.manifestSpec = { }

  // kinds for visualization
  $scope.kinds = {
    Pod: '#vertex-Pod',
    ReplicationController: '#vertex-ReplicationController',
    Node: '#vertex-Node',
    Service: '#vertex-Service',
    ReplicaSet: '#vertex-ReplicaSet',
    Container: '#vertex-Container'
  };

  // custome force for topology graph
  $scope.topologyForce = d3.layout
    .force()
    .charge(-1500)
    .gravity(.2)
    .linkDistance(100);
  
  $scope.switch = function() {
    index += 1;
    $scope.data = datasets[index % datasets.length];
  };

  $scope.$on("select", function(ev, item) {
    var text, kind, metadata, name
    var manifestJs = document.getElementById('manifest')
    var manifest = angular.element(manifestJs)
    var manifestName = angular.element(document.getElementById("manifest-name"))
    var manifestKind = angular.element(document.getElementById("manifest-kind"))
    var manifestMetadata = angular.element(document.getElementById("manifest-metadata"))
    var manifestSpec = angular.element(document.getElementById("manifest-spec"))
    
    if (item) {
      metadata = item.metadata
      spec = item.spec
      // get our metadata
      $scope.kind = item.kind      
      $scope.name = metadata.name
      $scope.labels = metadata.labels
      $scope.created = moment(metadata.creationTimestamp).format('MMMM DD, YYYY hh:mm:ss A')
      $scope.namespace = metadata.namespace
      $scope.selfLink = metadata.selfLink
      $scope.image = metadata.image
      $scope.imagePullPolicy = metadata.imagePullPolicy
      
      if (spec) {
        $scope.dnsPolicy = spec.dnsPolicy
        $scope.nodeName = spec.nodeName
        $scope.restartPolicy = spec.restartPolicy
        $scope.schedulerName = spec.schedulerName
        $scope.serviceAccount = spec.serviceAccount
        $scope.selector = spec.selector
        $scope.clusterIP = spec.clusterIP
        $scope.externalID = spec.externalID
        $scope.providerID = spec.providerID
        
      }
      manifest[0].classList = [`${item.kind} visible panel-view panel`]
      $scope.$apply()
    } else {
      manifest[0].classList = ['panel']
    }
  });
});