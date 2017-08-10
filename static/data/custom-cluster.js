const clusterData = {
  "items": [{
      "apiVersion": "v1",
      "kind": "Node",
      "metadata": {
        "annotations": {
          "node.alpha.kubernetes.io/ttl": "0",
          "volumes.kubernetes.io/controller-managed-attach-detach": "true"
        },
        "creationTimestamp": "2017-06-15T18:14:25Z",
        "labels": {
          "beta.kubernetes.io/arch": "amd64",
          "beta.kubernetes.io/instance-type": "t2.medium",
          "beta.kubernetes.io/os": "linux",
          "failure-domain.beta.kubernetes.io/region": "us-west-2",
          "failure-domain.beta.kubernetes.io/zone": "us-west-2b",
          "kubernetes.io/hostname": "ip-10-0-26-115",
          "kubernetes.io/role": "master",
          "node-role.kubernetes.io/master": ""
        },
        "name": "ip-10-0-26-115.us-west-2.compute.internal",
        "namespace": "",
        "resourceVersion": "5997529",
        "selfLink": "/api/v1/nodesip-10-0-26-115.us-west-2.compute.internal",
        "uid": "770e5479-51f6-11e7-bb77-0679f19ff252"
      },
      "spec": {
        "externalID": "i-0467845414f4ba791",
        "providerID": "aws:///us-west-2b/i-0467845414f4ba791",
        "taints": [{
          "effect": "NoSchedule",
          "key": "node-role.kubernetes.io/master",
          "timeAdded": null
        }]
      },
      "status": {
        "addresses": [{
            "address": "10.0.26.115",
            "type": "InternalIP"
          },
          {
            "address": "10.0.26.115",
            "type": "LegacyHostIP"
          },
          {
            "address": "ip-10-0-26-115.us-west-2.compute.internal",
            "type": "InternalDNS"
          },
          {
            "address": "ip-10-0-26-115",
            "type": "Hostname"
          }
        ],
        "allocatable": {
          "cpu": "2",
          "memory": "3942812Ki",
          "pods": "110"
        },
        "capacity": {
          "cpu": "2",
          "memory": "4045212Ki",
          "pods": "110"
        },
        "conditions": [{
            "lastHeartbeatTime": "2017-08-03T21:04:13Z",
            "lastTransitionTime": "2017-06-15T18:14:25Z",
            "message": "kubelet has sufficient disk space available",
            "reason": "KubeletHasSufficientDisk",
            "status": "False",
            "type": "OutOfDisk"
          },
          {
            "lastHeartbeatTime": "2017-08-03T21:04:13Z",
            "lastTransitionTime": "2017-06-15T18:14:25Z",
            "message": "kubelet has sufficient memory available",
            "reason": "KubeletHasSufficientMemory",
            "status": "False",
            "type": "MemoryPressure"
          },
          {
            "lastHeartbeatTime": "2017-08-03T21:04:13Z",
            "lastTransitionTime": "2017-06-15T18:14:25Z",
            "message": "kubelet has no disk pressure",
            "reason": "KubeletHasNoDiskPressure",
            "status": "False",
            "type": "DiskPressure"
          },
          {
            "lastHeartbeatTime": "2017-08-03T21:04:13Z",
            "lastTransitionTime": "2017-06-15T18:14:45Z",
            "message": "kubelet is posting ready status. AppArmor enabled",
            "reason": "KubeletReady",
            "status": "True",
            "type": "Ready"
          }
        ],
        "daemonEndpoints": {
          "kubeletEndpoint": {
            "Port": 10250
          }
        },
        "images": [{
            "names": [
              "quay.io/calico/node@sha256:8e62eee18612a6ac7bcae90afaba0ed95265baba7bf3c0ab632b7b40ddfaf603",
              "quay.io/calico/node:v1.1.3"
            ],
            "sizeBytes": 217132210
          },
          {
            "names": [
              "gcr.io/google_containers/etcd-amd64@sha256:d83d3545e06fb035db8512e33bd44afb55dea007a3abd7b17742d3ac6d235940",
              "gcr.io/google_containers/etcd-amd64:3.0.17"
            ],
            "sizeBytes": 168935516
          },
          {
            "names": [
              "weaveworks/weave-kube@sha256:8db0db57ee3c03224f63171b020bbdb50bd2bde6409780543ed9100765b164ed",
              "weaveworks/weave-kube:1.9.5"
            ],
            "sizeBytes": 163348973
          },
          {
            "names": [
              "gcr.io/google_containers/kube-apiserver-amd64@sha256:6d5aa429c2b0806e4b6d1d179054d6deee46eec0aabe7bd7bd6abff97be36ae7",
              "gcr.io/google_containers/kube-apiserver-amd64:v1.6.4"
            ],
            "sizeBytes": 150560464
          },
          {
            "names": [
              "gcr.io/google_containers/kube-discovery-amd64@sha256:7ebce8129c41bf64053f56a4f4418e198265b104b17f3f2d5b61667e208528f4",
              "gcr.io/google_containers/kube-discovery-amd64:1.0"
            ],
            "sizeBytes": 134189396
          },
          {
            "names": [
              "gcr.io/google_containers/kube-controller-manager-amd64@sha256:a93d4c26d71de94861f78cf5ea62600e4952685d580e2774c630ea206b7c18ee",
              "gcr.io/google_containers/kube-controller-manager-amd64:v1.6.4"
            ],
            "sizeBytes": 132786154
          },
          {
            "names": [
              "gcr.io/google_containers/kube-proxy-amd64@sha256:44cc08e7e8a2089eb8dfad6b692e9ece5994d6e6cff07fc9e9b1273cab0f6c6a",
              "gcr.io/google_containers/kube-proxy-amd64:v1.6.4"
            ],
            "sizeBytes": 109160326
          },
          {
            "names": [
              "weaveworks/weave-kube@sha256:77ffa5e6d1c471e1d921d110e19b579d2c78879b53ac09d7732e5afe441074d2",
              "weaveworks/weave-kube:2.0.1"
            ],
            "sizeBytes": 100684678
          },
          {
            "names": [
              "gcr.io/google_containers/kube-scheduler-amd64@sha256:57661c79890b01ef2ff183ed4b467ca470efc4fb8d0517cd29abe49e72f6d904",
              "gcr.io/google_containers/kube-scheduler-amd64:v1.6.4"
            ],
            "sizeBytes": 76752587
          },
          {
            "names": [
              "weaveworks/scope@sha256:ab746b1684244d444cda3cc940747709add60dcc773596dc2247b6010a73229e",
              "weaveworks/scope:1.5.1"
            ],
            "sizeBytes": 75416372
          },
          {
            "names": [
              "quay.io/calico/cni@sha256:ab449389d16667bbb1af6c22ac50f287b3253badd9c4b3ca99dde47fe8fcf388",
              "quay.io/calico/cni:v1.8.0"
            ],
            "sizeBytes": 67036468
          },
          {
            "names": [
              "weaveworks/weave-npc@sha256:182ccae504a5faae0fbe65f42a0a9f45eaa4923b313a43da2652b28348821694",
              "weaveworks/weave-npc:1.9.5"
            ],
            "sizeBytes": 58238527
          },
          {
            "names": [
              "weaveworks/weave-npc@sha256:5feb89098e84258afaadd878c41e5029ff1baa68579fe75cfca275b24caa4020",
              "weaveworks/weave-npc:2.0.1"
            ],
            "sizeBytes": 54692231
          },
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64@sha256:33914315e600dfb756e550828307dfa2b21fb6db24fe3fe495e33d1022f9245d",
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.1"
            ],
            "sizeBytes": 52360891
          },
          {
            "names": [
              "gcr.io/google_containers/kubedns-amd64@sha256:3d3d67f519300af646e00adcf860b2f380d35ed4364e550d74002dadace20ead",
              "gcr.io/google_containers/kubedns-amd64:1.9"
            ],
            "sizeBytes": 46998769
          },
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-dnsmasq-nanny-amd64@sha256:89c9a1d3cfbf370a9c1a949f39f92c1dc2dbe8c3e6cc1802b7f2b48e4dfe9a9e",
              "gcr.io/google_containers/k8s-dns-dnsmasq-nanny-amd64:1.14.1"
            ],
            "sizeBytes": 44848461
          },
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-sidecar-amd64@sha256:d33a91a5d65c223f410891001cd379ac734d036429e033865d700a4176e944b0",
              "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.1"
            ],
            "sizeBytes": 44520920
          },
          {
            "names": [
              "gcr.io/google_containers/etcd@sha256:19544a655157fb089b62d4dac02bbd095f82ca245dd5e31dd1684d175b109947",
              "gcr.io/google_containers/etcd:2.2.1"
            ],
            "sizeBytes": 28191895
          },
          {
            "names": [
              "quay.io/calico/kube-policy-controller@sha256:6ccc8caa6bf8ba94f5191532f5e279a307160cc9eb863e90b0200403bf8024d6",
              "quay.io/calico/kube-policy-controller:v0.5.4"
            ],
            "sizeBytes": 22576437
          },
          {
            "names": [
              "gcr.io/google_containers/dnsmasq-metrics-amd64@sha256:4063e37fd9b2fd91b7cc5392ed32b30b9c8162c4c7ad2787624306fc133e80a9",
              "gcr.io/google_containers/dnsmasq-metrics-amd64:1.0"
            ],
            "sizeBytes": 14002508
          },
          {
            "names": [
              "gcr.io/google_containers/exechealthz-amd64@sha256:503e158c3f65ed7399f54010571c7c977ade7fe59010695f48d9650d83488c0a",
              "gcr.io/google_containers/exechealthz-amd64:1.2"
            ],
            "sizeBytes": 8374840
          },
          {
            "names": [
              "gcr.io/google_containers/kube-dnsmasq-amd64@sha256:a722df15c0cf87779aad8ba2468cf072dd208cb5d7cfcaedd90e66b3da9ea9d2",
              "gcr.io/google_containers/kube-dnsmasq-amd64:1.4"
            ],
            "sizeBytes": 5129740
          },
          {
            "names": [
              "gcr.io/google_containers/pause-amd64@sha256:163ac025575b775d1c0f9bf0bdd0f086883171eb475b5068e7defa4ca9e76516",
              "gcr.io/google_containers/pause-amd64:3.0"
            ],
            "sizeBytes": 746888
          }
        ],
        "nodeInfo": {
          "architecture": "amd64",
          "bootID": "404ef068-d4fb-4446-92a6-29082ddcd520",
          "containerRuntimeVersion": "docker://1.12.6",
          "kernelVersion": "4.4.0-1020-aws",
          "kubeProxyVersion": "v1.6.4",
          "kubeletVersion": "v1.6.4",
          "machineID": "cb44f6119b3c43e9844d4e02652cdabf",
          "operatingSystem": "linux",
          "osImage": "Ubuntu 16.04.2 LTS",
          "systemUUID": "EC26CFD7-713D-3464-9A17-51CEAA6D4498"
        }
      }
    },
    {
      "apiVersion": "v1",
      "kind": "Node",
      "metadata": {
        "annotations": {
          "node.alpha.kubernetes.io/ttl": "0",
          "volumes.kubernetes.io/controller-managed-attach-detach": "true"
        },
        "creationTimestamp": "2017-06-15T18:17:26Z",
        "labels": {
          "beta.kubernetes.io/arch": "amd64",
          "beta.kubernetes.io/instance-type": "t2.medium",
          "beta.kubernetes.io/os": "linux",
          "failure-domain.beta.kubernetes.io/region": "us-west-2",
          "failure-domain.beta.kubernetes.io/zone": "us-west-2b",
          "kubernetes.io/hostname": "ip-10-0-27-158"
        },
        "name": "ip-10-0-27-158.us-west-2.compute.internal",
        "namespace": "",
        "resourceVersion": "5997537",
        "selfLink": "/api/v1/nodesip-10-0-27-158.us-west-2.compute.internal",
        "uid": "e276be4a-51f6-11e7-bb77-0679f19ff252"
      },
      "spec": {
        "externalID": "i-08ba3aaee36d47df3",
        "providerID": "aws:///us-west-2b/i-08ba3aaee36d47df3"
      },
      "status": {
        "addresses": [{
            "address": "10.0.27.158",
            "type": "InternalIP"
          },
          {
            "address": "10.0.27.158",
            "type": "LegacyHostIP"
          },
          {
            "address": "ip-10-0-27-158.us-west-2.compute.internal",
            "type": "InternalDNS"
          },
          {
            "address": "ip-10-0-27-158",
            "type": "Hostname"
          }
        ],
        "allocatable": {
          "cpu": "2",
          "memory": "3942612Ki",
          "pods": "110"
        },
        "capacity": {
          "cpu": "2",
          "memory": "4045012Ki",
          "pods": "110"
        },
        "conditions": [{
            "lastHeartbeatTime": "2017-08-03T21:04:18Z",
            "lastTransitionTime": "2017-06-15T18:17:26Z",
            "message": "kubelet has sufficient disk space available",
            "reason": "KubeletHasSufficientDisk",
            "status": "False",
            "type": "OutOfDisk"
          },
          {
            "lastHeartbeatTime": "2017-08-03T21:04:18Z",
            "lastTransitionTime": "2017-06-15T18:17:26Z",
            "message": "kubelet has sufficient memory available",
            "reason": "KubeletHasSufficientMemory",
            "status": "False",
            "type": "MemoryPressure"
          },
          {
            "lastHeartbeatTime": "2017-08-03T21:04:18Z",
            "lastTransitionTime": "2017-06-15T18:17:26Z",
            "message": "kubelet has no disk pressure",
            "reason": "KubeletHasNoDiskPressure",
            "status": "False",
            "type": "DiskPressure"
          },
          {
            "lastHeartbeatTime": "2017-08-03T21:04:18Z",
            "lastTransitionTime": "2017-06-15T18:17:46Z",
            "message": "kubelet is posting ready status. AppArmor enabled",
            "reason": "KubeletReady",
            "status": "True",
            "type": "Ready"
          }
        ],
        "daemonEndpoints": {
          "kubeletEndpoint": {
            "Port": 10250
          }
        },
        "images": [{
            "names": [
              "kubernetes/cluster-insight@sha256:a18854d066a35901828aca24a631bbc127ac70cfcc62c55cbae61be8d521f803",
              "kubernetes/cluster-insight:v2.0-alpha"
            ],
            "sizeBytes": 682038157
          },
          {
            "names": [
              "gcr.io/kate-heptio/viz@sha256:7f0b4425182edaa01ca3bbc33108b162822c1ffb20740e1549bd29163bcf8951",
              "gcr.io/kate-heptio/viz:v1"
            ],
            "sizeBytes": 661106663
          },
          {
            "names": [
              "cobeio/entityd@sha256:be44804517abb877c2843df80f45c8b48330d5b925553f881d312de020dfe55d",
              "cobeio/entityd:0.18.1-v1"
            ],
            "sizeBytes": 506930360
          },
          {
            "names": [
              "cobeio/kubectl@sha256:66c581afdce323f3f5e3752c5ae54b219d41196ab840c3a73fad4dee3dd92d3a",
              "cobeio/kubectl:v1.3.0"
            ],
            "sizeBytes": 233200148
          },
          {
            "names": [
              "quay.io/calico/node@sha256:8e62eee18612a6ac7bcae90afaba0ed95265baba7bf3c0ab632b7b40ddfaf603",
              "quay.io/calico/node:v1.1.3"
            ],
            "sizeBytes": 217132210
          },
          {
            "names": [
              "gcr.io/google_containers/etcd-amd64@sha256:d83d3545e06fb035db8512e33bd44afb55dea007a3abd7b17742d3ac6d235940",
              "gcr.io/google_containers/etcd-amd64:3.0.17"
            ],
            "sizeBytes": 168935516
          },
          {
            "names": [
              "weaveworks/weave-kube@sha256:8db0db57ee3c03224f63171b020bbdb50bd2bde6409780543ed9100765b164ed",
              "weaveworks/weave-kube:1.9.5"
            ],
            "sizeBytes": 163348973
          },
          {
            "names": [
              "gcr.io/google_containers/kube-apiserver-amd64@sha256:6d5aa429c2b0806e4b6d1d179054d6deee46eec0aabe7bd7bd6abff97be36ae7",
              "gcr.io/google_containers/kube-apiserver-amd64:v1.6.4"
            ],
            "sizeBytes": 150560464
          },
          {
            "names": [
              "gcr.io/google_containers/kubernetes-dashboard-amd64@sha256:b537ce8988510607e95b8d40ac9824523b1f9029e6f9f90e9fccc663c355cf5d",
              "gcr.io/google_containers/kubernetes-dashboard-amd64:v1.6.1"
            ],
            "sizeBytes": 134353887
          },
          {
            "names": [
              "gcr.io/google_containers/kube-discovery-amd64@sha256:7ebce8129c41bf64053f56a4f4418e198265b104b17f3f2d5b61667e208528f4",
              "gcr.io/google_containers/kube-discovery-amd64:1.0"
            ],
            "sizeBytes": 134189396
          },
          {
            "names": [
              "gcr.io/google_containers/kube-controller-manager-amd64@sha256:a93d4c26d71de94861f78cf5ea62600e4952685d580e2774c630ea206b7c18ee",
              "gcr.io/google_containers/kube-controller-manager-amd64:v1.6.4"
            ],
            "sizeBytes": 132786154
          },
          {
            "names": [
              "gcr.io/google_containers/kube-proxy-amd64@sha256:44cc08e7e8a2089eb8dfad6b692e9ece5994d6e6cff07fc9e9b1273cab0f6c6a",
              "gcr.io/google_containers/kube-proxy-amd64:v1.6.4"
            ],
            "sizeBytes": 109160326
          },
          {
            "names": [
              "nginx@sha256:72c7191585e9b79cde433c89955547685db00f3a8595a750339549f6acef7702",
              "nginx:1.13.1"
            ],
            "sizeBytes": 107468964
          },
          {
            "names": [
              "weaveworks/weave-kube@sha256:77ffa5e6d1c471e1d921d110e19b579d2c78879b53ac09d7732e5afe441074d2",
              "weaveworks/weave-kube:2.0.1"
            ],
            "sizeBytes": 100684678
          },
          {
            "names": [
              "gcr.io/google_containers/kube-scheduler-amd64@sha256:57661c79890b01ef2ff183ed4b467ca470efc4fb8d0517cd29abe49e72f6d904",
              "gcr.io/google_containers/kube-scheduler-amd64:v1.6.4"
            ],
            "sizeBytes": 76752587
          },
          {
            "names": [
              "weaveworks/scope@sha256:ab746b1684244d444cda3cc940747709add60dcc773596dc2247b6010a73229e",
              "weaveworks/scope:1.5.1"
            ],
            "sizeBytes": 75416372
          },
          {
            "names": [
              "quay.io/calico/cni@sha256:ab449389d16667bbb1af6c22ac50f287b3253badd9c4b3ca99dde47fe8fcf388",
              "quay.io/calico/cni:v1.8.0"
            ],
            "sizeBytes": 67036468
          },
          {
            "names": [
              "weaveworks/weave-npc@sha256:182ccae504a5faae0fbe65f42a0a9f45eaa4923b313a43da2652b28348821694",
              "weaveworks/weave-npc:1.9.5"
            ],
            "sizeBytes": 58238527
          },
          {
            "names": [
              "weaveworks/weave-npc@sha256:5feb89098e84258afaadd878c41e5029ff1baa68579fe75cfca275b24caa4020",
              "weaveworks/weave-npc:2.0.1"
            ],
            "sizeBytes": 54692231
          },
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64@sha256:33914315e600dfb756e550828307dfa2b21fb6db24fe3fe495e33d1022f9245d",
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.1"
            ],
            "sizeBytes": 52360891
          },
          {
            "names": [
              "gcr.io/google_containers/kubedns-amd64@sha256:3d3d67f519300af646e00adcf860b2f380d35ed4364e550d74002dadace20ead",
              "gcr.io/google_containers/kubedns-amd64:1.9"
            ],
            "sizeBytes": 46998769
          },
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-dnsmasq-nanny-amd64@sha256:89c9a1d3cfbf370a9c1a949f39f92c1dc2dbe8c3e6cc1802b7f2b48e4dfe9a9e",
              "gcr.io/google_containers/k8s-dns-dnsmasq-nanny-amd64:1.14.1"
            ],
            "sizeBytes": 44848461
          },
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-sidecar-amd64@sha256:d33a91a5d65c223f410891001cd379ac734d036429e033865d700a4176e944b0",
              "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.1"
            ],
            "sizeBytes": 44520920
          },
          {
            "names": [
              "gcr.io/google_containers/etcd@sha256:19544a655157fb089b62d4dac02bbd095f82ca245dd5e31dd1684d175b109947",
              "gcr.io/google_containers/etcd:2.2.1"
            ],
            "sizeBytes": 28191895
          },
          {
            "names": [
              "quay.io/calico/kube-policy-controller@sha256:6ccc8caa6bf8ba94f5191532f5e279a307160cc9eb863e90b0200403bf8024d6",
              "quay.io/calico/kube-policy-controller:v0.5.4"
            ],
            "sizeBytes": 22576437
          },
          {
            "names": [
              "gcr.io/google_containers/dnsmasq-metrics-amd64@sha256:4063e37fd9b2fd91b7cc5392ed32b30b9c8162c4c7ad2787624306fc133e80a9",
              "gcr.io/google_containers/dnsmasq-metrics-amd64:1.0"
            ],
            "sizeBytes": 14002508
          },
          {
            "names": [
              "gcr.io/google_containers/exechealthz-amd64@sha256:503e158c3f65ed7399f54010571c7c977ade7fe59010695f48d9650d83488c0a",
              "gcr.io/google_containers/exechealthz-amd64:1.2"
            ],
            "sizeBytes": 8374840
          },
          {
            "names": [
              "gcr.io/google_containers/kube-dnsmasq-amd64@sha256:a722df15c0cf87779aad8ba2468cf072dd208cb5d7cfcaedd90e66b3da9ea9d2",
              "gcr.io/google_containers/kube-dnsmasq-amd64:1.4"
            ],
            "sizeBytes": 5129740
          },
          {
            "names": [
              "gcr.io/google_containers/pause-amd64@sha256:163ac025575b775d1c0f9bf0bdd0f086883171eb475b5068e7defa4ca9e76516",
              "gcr.io/google_containers/pause-amd64:3.0"
            ],
            "sizeBytes": 746888
          }
        ],
        "nodeInfo": {
          "architecture": "amd64",
          "bootID": "5ca75b36-1a02-4dd9-81d5-d2b4ea2d1294",
          "containerRuntimeVersion": "docker://1.12.6",
          "kernelVersion": "4.4.0-1016-aws",
          "kubeProxyVersion": "v1.6.4",
          "kubeletVersion": "v1.6.4",
          "machineID": "ced21e05fe144cb7b25647ee1e84daef",
          "operatingSystem": "linux",
          "osImage": "Ubuntu 16.04.2 LTS",
          "systemUUID": "EC2D7C40-CFDC-AB91-DFBC-809EAC4C7194"
        }
      }
    },
    {
      "apiVersion": "v1",
      "kind": "Node",
      "metadata": {
        "annotations": {
          "node.alpha.kubernetes.io/ttl": "0",
          "volumes.kubernetes.io/controller-managed-attach-detach": "true"
        },
        "creationTimestamp": "2017-06-15T18:16:35Z",
        "labels": {
          "beta.kubernetes.io/arch": "amd64",
          "beta.kubernetes.io/instance-type": "t2.medium",
          "beta.kubernetes.io/os": "linux",
          "failure-domain.beta.kubernetes.io/region": "us-west-2",
          "failure-domain.beta.kubernetes.io/zone": "us-west-2b",
          "kubernetes.io/hostname": "ip-10-0-9-70"
        },
        "name": "ip-10-0-9-70.us-west-2.compute.internal",
        "namespace": "",
        "resourceVersion": "5997532",
        "selfLink": "/api/v1/nodesip-10-0-9-70.us-west-2.compute.internal",
        "uid": "c46b48a2-51f6-11e7-bb77-0679f19ff252"
      },
      "spec": {
        "externalID": "i-0207d7de186ee19bb",
        "providerID": "aws:///us-west-2b/i-0207d7de186ee19bb"
      },
      "status": {
        "addresses": [{
            "address": "10.0.9.70",
            "type": "InternalIP"
          },
          {
            "address": "10.0.9.70",
            "type": "LegacyHostIP"
          },
          {
            "address": "ip-10-0-9-70.us-west-2.compute.internal",
            "type": "InternalDNS"
          },
          {
            "address": "ip-10-0-9-70",
            "type": "Hostname"
          }
        ],
        "allocatable": {
          "cpu": "2",
          "memory": "3942612Ki",
          "pods": "110"
        },
        "capacity": {
          "cpu": "2",
          "memory": "4045012Ki",
          "pods": "110"
        },
        "conditions": [{
            "lastHeartbeatTime": "2017-08-03T21:04:14Z",
            "lastTransitionTime": "2017-06-15T18:16:35Z",
            "message": "kubelet has sufficient disk space available",
            "reason": "KubeletHasSufficientDisk",
            "status": "False",
            "type": "OutOfDisk"
          },
          {
            "lastHeartbeatTime": "2017-08-03T21:04:14Z",
            "lastTransitionTime": "2017-06-15T18:16:35Z",
            "message": "kubelet has sufficient memory available",
            "reason": "KubeletHasSufficientMemory",
            "status": "False",
            "type": "MemoryPressure"
          },
          {
            "lastHeartbeatTime": "2017-08-03T21:04:14Z",
            "lastTransitionTime": "2017-06-15T18:16:35Z",
            "message": "kubelet has no disk pressure",
            "reason": "KubeletHasNoDiskPressure",
            "status": "False",
            "type": "DiskPressure"
          },
          {
            "lastHeartbeatTime": "2017-08-03T21:04:14Z",
            "lastTransitionTime": "2017-06-15T18:16:55Z",
            "message": "kubelet is posting ready status. AppArmor enabled",
            "reason": "KubeletReady",
            "status": "True",
            "type": "Ready"
          }
        ],
        "daemonEndpoints": {
          "kubeletEndpoint": {
            "Port": 10250
          }
        },
        "images": [{
            "names": [
              "gcr.io/kate-heptio/viz@sha256:7f0b4425182edaa01ca3bbc33108b162822c1ffb20740e1549bd29163bcf8951",
              "gcr.io/kate-heptio/viz:v1"
            ],
            "sizeBytes": 661106663
          },
          {
            "names": [
              "cobeio/entityd@sha256:be44804517abb877c2843df80f45c8b48330d5b925553f881d312de020dfe55d",
              "cobeio/entityd:0.18.1-v1"
            ],
            "sizeBytes": 506930360
          },
          {
            "names": [
              "cobeio/kubectl@sha256:66c581afdce323f3f5e3752c5ae54b219d41196ab840c3a73fad4dee3dd92d3a",
              "cobeio/kubectl:v1.3.0"
            ],
            "sizeBytes": 233200148
          },
          {
            "names": [
              "quay.io/calico/node@sha256:8e62eee18612a6ac7bcae90afaba0ed95265baba7bf3c0ab632b7b40ddfaf603",
              "quay.io/calico/node:v1.1.3"
            ],
            "sizeBytes": 217132210
          },
          {
            "names": [
              "gcr.io/google_containers/etcd-amd64@sha256:d83d3545e06fb035db8512e33bd44afb55dea007a3abd7b17742d3ac6d235940",
              "gcr.io/google_containers/etcd-amd64:3.0.17"
            ],
            "sizeBytes": 168935516
          },
          {
            "names": [
              "weaveworks/weave-kube@sha256:8db0db57ee3c03224f63171b020bbdb50bd2bde6409780543ed9100765b164ed",
              "weaveworks/weave-kube:1.9.5"
            ],
            "sizeBytes": 163348973
          },
          {
            "names": [
              "gcr.io/google_containers/kube-apiserver-amd64@sha256:6d5aa429c2b0806e4b6d1d179054d6deee46eec0aabe7bd7bd6abff97be36ae7",
              "gcr.io/google_containers/kube-apiserver-amd64:v1.6.4"
            ],
            "sizeBytes": 150560464
          },
          {
            "names": [
              "gcr.io/google_containers/kube-discovery-amd64@sha256:7ebce8129c41bf64053f56a4f4418e198265b104b17f3f2d5b61667e208528f4",
              "gcr.io/google_containers/kube-discovery-amd64:1.0"
            ],
            "sizeBytes": 134189396
          },
          {
            "names": [
              "gcr.io/google_containers/kube-controller-manager-amd64@sha256:a93d4c26d71de94861f78cf5ea62600e4952685d580e2774c630ea206b7c18ee",
              "gcr.io/google_containers/kube-controller-manager-amd64:v1.6.4"
            ],
            "sizeBytes": 132786154
          },
          {
            "names": [
              "gcr.io/google_containers/kube-proxy-amd64@sha256:44cc08e7e8a2089eb8dfad6b692e9ece5994d6e6cff07fc9e9b1273cab0f6c6a",
              "gcr.io/google_containers/kube-proxy-amd64:v1.6.4"
            ],
            "sizeBytes": 109160326
          },
          {
            "names": [
              "nginx@sha256:72c7191585e9b79cde433c89955547685db00f3a8595a750339549f6acef7702",
              "nginx:1.13.1"
            ],
            "sizeBytes": 107468964
          },
          {
            "names": [
              "weaveworks/weave-kube@sha256:77ffa5e6d1c471e1d921d110e19b579d2c78879b53ac09d7732e5afe441074d2",
              "weaveworks/weave-kube:2.0.1"
            ],
            "sizeBytes": 100684678
          },
          {
            "names": [
              "gcr.io/google_containers/kube-scheduler-amd64@sha256:57661c79890b01ef2ff183ed4b467ca470efc4fb8d0517cd29abe49e72f6d904",
              "gcr.io/google_containers/kube-scheduler-amd64:v1.6.4"
            ],
            "sizeBytes": 76752587
          },
          {
            "names": [
              "weaveworks/scope@sha256:ab746b1684244d444cda3cc940747709add60dcc773596dc2247b6010a73229e",
              "weaveworks/scope:1.5.1"
            ],
            "sizeBytes": 75416372
          },
          {
            "names": [
              "quay.io/calico/cni@sha256:ab449389d16667bbb1af6c22ac50f287b3253badd9c4b3ca99dde47fe8fcf388",
              "quay.io/calico/cni:v1.8.0"
            ],
            "sizeBytes": 67036468
          },
          {
            "names": [
              "weaveworks/weave-npc@sha256:182ccae504a5faae0fbe65f42a0a9f45eaa4923b313a43da2652b28348821694",
              "weaveworks/weave-npc:1.9.5"
            ],
            "sizeBytes": 58238527
          },
          {
            "names": [
              "weaveworks/weave-npc@sha256:5feb89098e84258afaadd878c41e5029ff1baa68579fe75cfca275b24caa4020",
              "weaveworks/weave-npc:2.0.1"
            ],
            "sizeBytes": 54692231
          },
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64@sha256:33914315e600dfb756e550828307dfa2b21fb6db24fe3fe495e33d1022f9245d",
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.1"
            ],
            "sizeBytes": 52360891
          },
          {
            "names": [
              "gcr.io/google_containers/kubedns-amd64@sha256:3d3d67f519300af646e00adcf860b2f380d35ed4364e550d74002dadace20ead",
              "gcr.io/google_containers/kubedns-amd64:1.9"
            ],
            "sizeBytes": 46998769
          },
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-dnsmasq-nanny-amd64@sha256:89c9a1d3cfbf370a9c1a949f39f92c1dc2dbe8c3e6cc1802b7f2b48e4dfe9a9e",
              "gcr.io/google_containers/k8s-dns-dnsmasq-nanny-amd64:1.14.1"
            ],
            "sizeBytes": 44848461
          },
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-sidecar-amd64@sha256:d33a91a5d65c223f410891001cd379ac734d036429e033865d700a4176e944b0",
              "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.1"
            ],
            "sizeBytes": 44520920
          },
          {
            "names": [
              "gcr.io/google_containers/etcd@sha256:19544a655157fb089b62d4dac02bbd095f82ca245dd5e31dd1684d175b109947",
              "gcr.io/google_containers/etcd:2.2.1"
            ],
            "sizeBytes": 28191895
          },
          {
            "names": [
              "quay.io/calico/kube-policy-controller@sha256:6ccc8caa6bf8ba94f5191532f5e279a307160cc9eb863e90b0200403bf8024d6",
              "quay.io/calico/kube-policy-controller:v0.5.4"
            ],
            "sizeBytes": 22576437
          },
          {
            "names": [
              "gcr.io/google_containers/dnsmasq-metrics-amd64@sha256:4063e37fd9b2fd91b7cc5392ed32b30b9c8162c4c7ad2787624306fc133e80a9",
              "gcr.io/google_containers/dnsmasq-metrics-amd64:1.0"
            ],
            "sizeBytes": 14002508
          },
          {
            "names": [
              "gcr.io/google_containers/exechealthz-amd64@sha256:503e158c3f65ed7399f54010571c7c977ade7fe59010695f48d9650d83488c0a",
              "gcr.io/google_containers/exechealthz-amd64:1.2"
            ],
            "sizeBytes": 8374840
          },
          {
            "names": [
              "gcr.io/google_containers/kube-dnsmasq-amd64@sha256:a722df15c0cf87779aad8ba2468cf072dd208cb5d7cfcaedd90e66b3da9ea9d2",
              "gcr.io/google_containers/kube-dnsmasq-amd64:1.4"
            ],
            "sizeBytes": 5129740
          },
          {
            "names": [
              "hypriot/rpi-busybox-httpd@sha256:c00342f952d97628bf5dda457d3b409c37df687c859df82b9424f61264f54cd1",
              "hypriot/rpi-busybox-httpd:latest"
            ],
            "sizeBytes": 2156456
          },
          {
            "names": [
              "gcr.io/google_containers/pause-amd64@sha256:163ac025575b775d1c0f9bf0bdd0f086883171eb475b5068e7defa4ca9e76516",
              "gcr.io/google_containers/pause-amd64:3.0"
            ],
            "sizeBytes": 746888
          }
        ],
        "nodeInfo": {
          "architecture": "amd64",
          "bootID": "0ec0635c-9884-4126-9099-135f610bfdf4",
          "containerRuntimeVersion": "docker://1.12.6",
          "kernelVersion": "4.4.0-1016-aws",
          "kubeProxyVersion": "v1.6.4",
          "kubeletVersion": "v1.6.4",
          "machineID": "4009ed21a3374dcd86e99258ffd9a168",
          "operatingSystem": "linux",
          "osImage": "Ubuntu 16.04.2 LTS",
          "systemUUID": "EC2BCE08-4D82-4969-9FBB-695EE5A15091"
        }
      }
    },
    {
      "apiVersion": "v1",
      "kind": "Pod",
      "metadata": {
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicationController\",\"namespace\":\"default\",\"name\":\"cluster-insight-controller\",\"uid\":\"7fab1bf6-6665-11e7-a8b7-0679f19ff252\",\"apiVersion\":\"v1\",\"resourceVersion\":\"3014933\"}}\n"
        },
        "creationTimestamp": "2017-07-11T18:19:37Z",
        "generateName": "cluster-insight-controller-",
        "labels": {
          "app": "cluster-insight",
          "version": "v2"
        },
        "name": "cluster-insight-controller-nwlqm",
        "namespace": "default",
        "ownerReferences": [{
          "apiVersion": "v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicationController",
          "name": "cluster-insight-controller",
          "uid": "7fab1bf6-6665-11e7-a8b7-0679f19ff252"
        }],
        "resourceVersion": "3015027",
        "selfLink": "/api/v1/namespaces/default/pods/cluster-insight-controller-nwlqm",
        "uid": "7fabc37a-6665-11e7-a8b7-0679f19ff252"
      },
      "spec": {
        "containers": [{
          "image": "kubernetes/cluster-insight:v2.0-alpha",
          "imagePullPolicy": "IfNotPresent",
          "name": "cluster-insight",
          "ports": [{
            "containerPort": 5555,
            "name": "cluster-insight",
            "protocol": "TCP"
          }],
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [{
            "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
            "name": "default-token-lzwkl",
            "readOnly": true
          }]
        }],
        "dnsPolicy": "ClusterFirst",
        "imagePullSecrets": [{
          "name": "default-token-f7kcp"
        }],
        "nodeName": "ip-10-0-27-158.us-west-2.compute.internal",
        "restartPolicy": "Always",
        "schedulerName": "default-scheduler",
        "securityContext": {},
        "serviceAccount": "default",
        "serviceAccountName": "default",
        "terminationGracePeriodSeconds": 30,
        "tolerations": [{
            "effect": "NoExecute",
            "key": "node.alpha.kubernetes.io/notReady",
            "operator": "Exists",
            "tolerationSeconds": 300
          },
          {
            "effect": "NoExecute",
            "key": "node.alpha.kubernetes.io/unreachable",
            "operator": "Exists",
            "tolerationSeconds": 300
          }
        ],
        "volumes": [{
          "name": "default-token-lzwkl",
          "secret": {
            "defaultMode": 420,
            "secretName": "default-token-lzwkl"
          }
        }]
      },
      "status": {
        "conditions": [{
            "lastProbeTime": null,
            "lastTransitionTime": "2017-07-11T18:19:37Z",
            "status": "True",
            "type": "Initialized"
          },
          {
            "lastProbeTime": null,
            "lastTransitionTime": "2017-07-11T18:20:31Z",
            "status": "True",
            "type": "Ready"
          },
          {
            "lastProbeTime": null,
            "lastTransitionTime": "2017-07-11T18:19:37Z",
            "status": "True",
            "type": "PodScheduled"
          }
        ],
        "containerStatuses": [{
          "containerID": "docker://f939e8da9fba227a99399758eb7627438b4e6c54d93f8463d55a510756bb0341",
          "image": "kubernetes/cluster-insight:v2.0-alpha",
          "imageID": "docker-pullable://kubernetes/cluster-insight@sha256:a18854d066a35901828aca24a631bbc127ac70cfcc62c55cbae61be8d521f803",
          "lastState": {},
          "name": "cluster-insight",
          "ready": true,
          "restartCount": 0,
          "state": {
            "running": {
              "startedAt": "2017-07-11T18:20:31Z"
            }
          }
        }],
        "hostIP": "10.0.27.158",
        "phase": "Running",
        "podIP": "192.168.30.18",
        "qosClass": "BestEffort",
        "startTime": "2017-07-11T18:19:37Z"
      }
    },
    {
      "apiVersion": "v1",
      "kind": "Pod",
      "metadata": {
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicationController\",\"namespace\":\"default\",\"name\":\"cobe-agent-viz\",\"uid\":\"e1b53acc-665a-11e7-a8b7-0679f19ff252\",\"apiVersion\":\"v1\",\"resourceVersion\":\"3007914\"}}\n"
        },
        "creationTimestamp": "2017-07-11T17:04:05Z",
        "generateName": "cobe-agent-viz-",
        "labels": {
          "cobeio/app": "agent",
          "cobeio/role": "kubernetes",
          "cobeio/ti": "viz",
          "cobeio/version": "0.18.1-v1"
        },
        "name": "cobe-agent-viz-84s3q",
        "namespace": "default",
        "ownerReferences": [{
          "apiVersion": "v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicationController",
          "name": "cobe-agent-viz",
          "uid": "e1b53acc-665a-11e7-a8b7-0679f19ff252"
        }],
        "resourceVersion": "5991287",
        "selfLink": "/api/v1/namespaces/default/pods/cobe-agent-viz-84s3q",
        "uid": "f2748eb7-665a-11e7-a8b7-0679f19ff252"
      },
      "spec": {
        "containers": [{
            "args": [
              "--dest=tcp://modeld.viz.cobe.io:25010",
              "--stream-optimise"
            ],
            "image": "cobeio/entityd:0.18.1-v1",
            "imagePullPolicy": "IfNotPresent",
            "name": "entityd",
            "resources": {
              "limits": {
                "cpu": "1",
                "memory": "100Mi"
              },
              "requests": {
                "cpu": "50m",
                "memory": "55Mi"
              }
            },
            "terminationMessagePath": "/dev/termination-log",
            "terminationMessagePolicy": "File",
            "volumeMounts": [{
                "mountPath": "/opt/entityd/keys",
                "name": "streamapi-keys",
                "readOnly": true
              },
              {
                "mountPath": "/var/run",
                "name": "host-var-run"
              },
              {
                "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
                "name": "default-token-lzwkl",
                "readOnly": true
              }
            ]
          },
          {
            "image": "cobeio/kubectl:v1.3.0",
            "imagePullPolicy": "IfNotPresent",
            "name": "kubeproxy",
            "resources": {
              "limits": {
                "cpu": "500m",
                "memory": "50Mi"
              },
              "requests": {
                "cpu": "20m",
                "memory": "30Mi"
              }
            },
            "terminationMessagePath": "/dev/termination-log",
            "terminationMessagePolicy": "File",
            "volumeMounts": [{
              "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
              "name": "default-token-lzwkl",
              "readOnly": true
            }]
          }
        ],
        "dnsPolicy": "ClusterFirst",
        "hostPID": true,
        "imagePullSecrets": [{
          "name": "default-token-f7kcp"
        }],
        "nodeName": "ip-10-0-9-70.us-west-2.compute.internal",
        "restartPolicy": "Always",
        "schedulerName": "default-scheduler",
        "securityContext": {},
        "serviceAccount": "default",
        "serviceAccountName": "default",
        "terminationGracePeriodSeconds": 30,
        "tolerations": [{
            "effect": "NoExecute",
            "key": "node.alpha.kubernetes.io/notReady",
            "operator": "Exists",
            "tolerationSeconds": 300
          },
          {
            "effect": "NoExecute",
            "key": "node.alpha.kubernetes.io/unreachable",
            "operator": "Exists",
            "tolerationSeconds": 300
          }
        ],
        "volumes": [{
            "name": "streamapi-keys",
            "secret": {
              "defaultMode": 420,
              "secretName": "cobe-agent-viz-keys"
            }
          },
          {
            "hostPath": {
              "path": "/var/run"
            },
            "name": "host-var-run"
          },
          {
            "name": "default-token-lzwkl",
            "secret": {
              "defaultMode": 420,
              "secretName": "default-token-lzwkl"
            }
          }
        ]
      },
      "status": {
        "conditions": [{
            "lastProbeTime": null,
            "lastTransitionTime": "2017-07-11T17:04:05Z",
            "status": "True",
            "type": "Initialized"
          },
          {
            "lastProbeTime": null,
            "lastTransitionTime": "2017-08-03T19:54:14Z",
            "message": "containers with unready status: [entityd]",
            "reason": "ContainersNotReady",
            "status": "False",
            "type": "Ready"
          },
          {
            "lastProbeTime": null,
            "lastTransitionTime": "2017-07-11T17:04:05Z",
            "status": "True",
            "type": "PodScheduled"
          }
        ],
        "containerStatuses": [{
            "containerID": "docker://62b9be6d124355471d180c98d489ba79d7f601087e33606a9f115e35e175aa4c",
            "image": "cobeio/entityd:0.18.1-v1",
            "imageID": "docker-pullable://cobeio/entityd@sha256:be44804517abb877c2843df80f45c8b48330d5b925553f881d312de020dfe55d",
            "lastState": {
              "terminated": {
                "containerID": "docker://62b9be6d124355471d180c98d489ba79d7f601087e33606a9f115e35e175aa4c",
                "exitCode": 1,
                "finishedAt": "2017-08-03T19:54:13Z",
                "reason": "Error",
                "startedAt": null
              }
            },
            "name": "entityd",
            "ready": false,
            "restartCount": 6505,
            "state": {
              "waiting": {
                "message": "Back-off 5m0s restarting failed container=entityd pod=cobe-agent-viz-84s3q_default(f2748eb7-665a-11e7-a8b7-0679f19ff252)",
                "reason": "CrashLoopBackOff"
              }
            }
          },
          {
            "containerID": "docker://7d0df7aebe135575184af432571d834cea72010d30a51339ca315ea073177e0b",
            "image": "cobeio/kubectl:v1.3.0",
            "imageID": "docker-pullable://cobeio/kubectl@sha256:66c581afdce323f3f5e3752c5ae54b219d41196ab840c3a73fad4dee3dd92d3a",
            "lastState": {},
            "name": "kubeproxy",
            "ready": true,
            "restartCount": 0,
            "state": {
              "running": {
                "startedAt": "2017-07-11T17:04:06Z"
              }
            }
          }
        ],
        "hostIP": "10.0.9.70",
        "phase": "Running",
        "podIP": "192.168.168.25",
        "qosClass": "Burstable",
        "startTime": "2017-07-11T17:04:05Z"
      }
    },
    {
      "apiVersion": "v1",
      "kind": "Pod",
      "metadata": {
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicaSet\",\"namespace\":\"default\",\"name\":\"nginx-kate-861736919\",\"uid\":\"d7338f42-5d0d-11e7-a8b7-0679f19ff252\",\"apiVersion\":\"extensions\",\"resourceVersion\":\"2895602\"}}\n"
        },
        "creationTimestamp": "2017-07-10T21:45:51Z",
        "generateName": "nginx-kate-861736919-",
        "labels": {
          "pod-template-hash": "861736919",
          "run": "nginx-kate"
        },
        "name": "nginx-kate-861736919-bzrn2",
        "namespace": "default",
        "ownerReferences": [{
          "apiVersion": "extensions/v1beta1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicaSet",
          "name": "nginx-kate-861736919",
          "uid": "d7338f42-5d0d-11e7-a8b7-0679f19ff252"
        }],
        "resourceVersion": "2895630",
        "selfLink": "/api/v1/namespaces/default/pods/nginx-kate-861736919-bzrn2",
        "uid": "24d2b092-65b9-11e7-a8b7-0679f19ff252"
      },
      "spec": {
        "containers": [{
          "image": "nginx:1.13.1",
          "imagePullPolicy": "IfNotPresent",
          "name": "nginx-kate",
          "ports": [{
            "containerPort": 80,
            "protocol": "TCP"
          }],
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [{
            "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
            "name": "default-token-lzwkl",
            "readOnly": true
          }]
        }],
        "dnsPolicy": "ClusterFirst",
        "imagePullSecrets": [{
          "name": "default-token-f7kcp"
        }],
        "nodeName": "ip-10-0-9-70.us-west-2.compute.internal",
        "restartPolicy": "Always",
        "schedulerName": "default-scheduler",
        "securityContext": {},
        "serviceAccount": "default",
        "serviceAccountName": "default",
        "terminationGracePeriodSeconds": 30,
        "tolerations": [{
            "effect": "NoExecute",
            "key": "node.alpha.kubernetes.io/notReady",
            "operator": "Exists",
            "tolerationSeconds": 300
          },
          {
            "effect": "NoExecute",
            "key": "node.alpha.kubernetes.io/unreachable",
            "operator": "Exists",
            "tolerationSeconds": 300
          }
        ],
        "volumes": [{
          "name": "default-token-lzwkl",
          "secret": {
            "defaultMode": 420,
            "secretName": "default-token-lzwkl"
          }
        }]
      },
      "status": {
        "conditions": [{
            "lastProbeTime": null,
            "lastTransitionTime": "2017-07-10T21:45:51Z",
            "status": "True",
            "type": "Initialized"
          },
          {
            "lastProbeTime": null,
            "lastTransitionTime": "2017-07-10T21:45:58Z",
            "status": "True",
            "type": "Ready"
          },
          {
            "lastProbeTime": null,
            "lastTransitionTime": "2017-07-10T21:45:51Z",
            "status": "True",
            "type": "PodScheduled"
          }
        ],
        "containerStatuses": [{
          "containerID": "docker://2c60b5784fc4467dc8a151235875615b44b4470ab729cd0c9c5fdbdc9e7d7d27",
          "image": "nginx:1.13.1",
          "imageID": "docker-pullable://nginx@sha256:72c7191585e9b79cde433c89955547685db00f3a8595a750339549f6acef7702",
          "lastState": {},
          "name": "nginx-kate",
          "ready": true,
          "restartCount": 0,
          "state": {
            "running": {
              "startedAt": "2017-07-10T21:45:58Z"
            }
          }
        }],
        "hostIP": "10.0.9.70",
        "phase": "Running",
        "podIP": "192.168.168.16",
        "qosClass": "BestEffort",
        "startTime": "2017-07-10T21:45:51Z"
      }
    },
    {
      "apiVersion": "v1",
      "kind": "Pod",
      "metadata": {
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicaSet\",\"namespace\":\"default\",\"name\":\"nginx-kate-861736919\",\"uid\":\"d7338f42-5d0d-11e7-a8b7-0679f19ff252\",\"apiVersion\":\"extensions\",\"resourceVersion\":\"2895635\"}}\n"
        },
        "creationTimestamp": "2017-07-10T21:45:59Z",
        "generateName": "nginx-kate-861736919-",
        "labels": {
          "pod-template-hash": "861736919",
          "run": "nginx-kate"
        },
        "name": "nginx-kate-861736919-sqvrw",
        "namespace": "default",
        "ownerReferences": [{
          "apiVersion": "extensions/v1beta1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicaSet",
          "name": "nginx-kate-861736919",
          "uid": "d7338f42-5d0d-11e7-a8b7-0679f19ff252"
        }],
        "resourceVersion": "2895650",
        "selfLink": "/api/v1/namespaces/default/pods/nginx-kate-861736919-sqvrw",
        "uid": "2911550c-65b9-11e7-a8b7-0679f19ff252"
      },
      "spec": {
        "containers": [{
          "image": "nginx:1.13.1",
          "imagePullPolicy": "IfNotPresent",
          "name": "nginx-kate",
          "ports": [{
            "containerPort": 80,
            "protocol": "TCP"
          }],
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [{
            "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
            "name": "default-token-lzwkl",
            "readOnly": true
          }]
        }],
        "dnsPolicy": "ClusterFirst",
        "imagePullSecrets": [{
          "name": "default-token-f7kcp"
        }],
        "nodeName": "ip-10-0-27-158.us-west-2.compute.internal",
        "restartPolicy": "Always",
        "schedulerName": "default-scheduler",
        "securityContext": {},
        "serviceAccount": "default",
        "serviceAccountName": "default",
        "terminationGracePeriodSeconds": 30,
        "tolerations": [{
            "effect": "NoExecute",
            "key": "node.alpha.kubernetes.io/notReady",
            "operator": "Exists",
            "tolerationSeconds": 300
          },
          {
            "effect": "NoExecute",
            "key": "node.alpha.kubernetes.io/unreachable",
            "operator": "Exists",
            "tolerationSeconds": 300
          }
        ],
        "volumes": [{
          "name": "default-token-lzwkl",
          "secret": {
            "defaultMode": 420,
            "secretName": "default-token-lzwkl"
          }
        }]
      },
      "status": {
        "conditions": [{
            "lastProbeTime": null,
            "lastTransitionTime": "2017-07-10T21:45:59Z",
            "status": "True",
            "type": "Initialized"
          },
          {
            "lastProbeTime": null,
            "lastTransitionTime": "2017-07-10T21:45:59Z",
            "status": "True",
            "type": "Ready"
          },
          {
            "lastProbeTime": null,
            "lastTransitionTime": "2017-07-10T21:45:59Z",
            "status": "True",
            "type": "PodScheduled"
          }
        ],
        "containerStatuses": [{
          "containerID": "docker://ccfc73c8ff9e4b21a5207450f0da191d220226708fdd09626a429a2f2731a92d",
          "image": "nginx:1.13.1",
          "imageID": "docker-pullable://nginx@sha256:72c7191585e9b79cde433c89955547685db00f3a8595a750339549f6acef7702",
          "lastState": {},
          "name": "nginx-kate",
          "ready": true,
          "restartCount": 0,
          "state": {
            "running": {
              "startedAt": "2017-07-10T21:45:59Z"
            }
          }
        }],
        "hostIP": "10.0.27.158",
        "phase": "Running",
        "podIP": "192.168.30.9",
        "qosClass": "BestEffort",
        "startTime": "2017-07-10T21:45:59Z"
      }
    },
    {
      "apiVersion": "v1",
      "kind": "Pod",
      "metadata": {
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicaSet\",\"namespace\":\"default\",\"name\":\"viz-2517118100\",\"uid\":\"5dc0f612-5de0-11e7-a8b7-0679f19ff252\",\"apiVersion\":\"extensions\",\"resourceVersion\":\"2895706\"}}\n"
        },
        "creationTimestamp": "2017-07-10T21:46:35Z",
        "generateName": "viz-2517118100-",
        "labels": {
          "pod-template-hash": "2517118100",
          "run": "viz"
        },
        "name": "viz-2517118100-874kr",
        "namespace": "default",
        "ownerReferences": [{
          "apiVersion": "extensions/v1beta1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicaSet",
          "name": "viz-2517118100",
          "uid": "5dc0f612-5de0-11e7-a8b7-0679f19ff252"
        }],
        "resourceVersion": "2895724",
        "selfLink": "/api/v1/namespaces/default/pods/viz-2517118100-874kr",
        "uid": "3e900a3f-65b9-11e7-a8b7-0679f19ff252"
      },
      "spec": {
        "containers": [{
          "env": [{
            "name": "SKIP_CORS_CHECK",
            "value": "true"
          }],
          "image": "gcr.io/kate-heptio/viz:v1",
          "imagePullPolicy": "IfNotPresent",
          "name": "viz",
          "ports": [{
            "containerPort": 8080,
            "protocol": "TCP"
          }],
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [{
            "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
            "name": "default-token-lzwkl",
            "readOnly": true
          }]
        }],
        "dnsPolicy": "ClusterFirst",
        "imagePullSecrets": [{
          "name": "default-token-f7kcp"
        }],
        "nodeName": "ip-10-0-27-158.us-west-2.compute.internal",
        "restartPolicy": "Always",
        "schedulerName": "default-scheduler",
        "securityContext": {},
        "serviceAccount": "default",
        "serviceAccountName": "default",
        "terminationGracePeriodSeconds": 30,
        "tolerations": [{
            "effect": "NoExecute",
            "key": "node.alpha.kubernetes.io/notReady",
            "operator": "Exists",
            "tolerationSeconds": 300
          },
          {
            "effect": "NoExecute",
            "key": "node.alpha.kubernetes.io/unreachable",
            "operator": "Exists",
            "tolerationSeconds": 300
          }
        ],
        "volumes": [{
          "name": "default-token-lzwkl",
          "secret": {
            "defaultMode": 420,
            "secretName": "default-token-lzwkl"
          }
        }]
      },
      "status": {
        "conditions": [{
            "lastProbeTime": null,
            "lastTransitionTime": "2017-07-10T21:46:35Z",
            "status": "True",
            "type": "Initialized"
          },
          {
            "lastProbeTime": null,
            "lastTransitionTime": "2017-07-10T21:46:36Z",
            "status": "True",
            "type": "Ready"
          },
          {
            "lastProbeTime": null,
            "lastTransitionTime": "2017-07-10T21:46:35Z",
            "status": "True",
            "type": "PodScheduled"
          }
        ],
        "containerStatuses": [{
          "containerID": "docker://13b55d0a1c2b5c478cbc47c5e0bbc30e9c9cae73d259c925ff70a591aba6da49",
          "image": "gcr.io/kate-heptio/viz:v1",
          "imageID": "docker-pullable://gcr.io/kate-heptio/viz@sha256:7f0b4425182edaa01ca3bbc33108b162822c1ffb20740e1549bd29163bcf8951",
          "lastState": {},
          "name": "viz",
          "ready": true,
          "restartCount": 0,
          "state": {
            "running": {
              "startedAt": "2017-07-10T21:46:35Z"
            }
          }
        }],
        "hostIP": "10.0.27.158",
        "phase": "Running",
        "podIP": "192.168.30.10",
        "qosClass": "BestEffort",
        "startTime": "2017-07-10T21:46:35Z"
      }
    },
    {
      "apiVersion": "v1",
      "kind": "Pod",
      "metadata": {
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicaSet\",\"namespace\":\"default\",\"name\":\"viz-2517118100\",\"uid\":\"5dc0f612-5de0-11e7-a8b7-0679f19ff252\",\"apiVersion\":\"extensions\",\"resourceVersion\":\"1746939\"}}\n"
        },
        "creationTimestamp": "2017-06-30T22:06:28Z",
        "generateName": "viz-2517118100-",
        "labels": {
          "pod-template-hash": "2517118100",
          "run": "viz"
        },
        "name": "viz-2517118100-8lzr0",
        "namespace": "default",
        "ownerReferences": [{
          "apiVersion": "extensions/v1beta1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicaSet",
          "name": "viz-2517118100",
          "uid": "5dc0f612-5de0-11e7-a8b7-0679f19ff252"
        }],
        "resourceVersion": "1747180",
        "selfLink": "/api/v1/namespaces/default/pods/viz-2517118100-8lzr0",
        "uid": "5dc20aa8-5de0-11e7-a8b7-0679f19ff252"
      },
      "spec": {
        "containers": [{
          "env": [{
            "name": "SKIP_CORS_CHECK",
            "value": "true"
          }],
          "image": "gcr.io/kate-heptio/viz:v1",
          "imagePullPolicy": "IfNotPresent",
          "name": "viz",
          "ports": [{
            "containerPort": 8080,
            "protocol": "TCP"
          }],
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [{
            "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
            "name": "default-token-lzwkl",
            "readOnly": true
          }]
        }],
        "dnsPolicy": "ClusterFirst",
        "imagePullSecrets": [{
          "name": "default-token-f7kcp"
        }],
        "nodeName": "ip-10-0-9-70.us-west-2.compute.internal",
        "restartPolicy": "Always",
        "schedulerName": "default-scheduler",
        "securityContext": {},
        "serviceAccount": "default",
        "serviceAccountName": "default",
        "terminationGracePeriodSeconds": 30,
        "tolerations": [{
            "effect": "NoExecute",
            "key": "node.alpha.kubernetes.io/notReady",
            "operator": "Exists",
            "tolerationSeconds": 300
          },
          {
            "effect": "NoExecute",
            "key": "node.alpha.kubernetes.io/unreachable",
            "operator": "Exists",
            "tolerationSeconds": 300
          }
        ],
        "volumes": [{
          "name": "default-token-lzwkl",
          "secret": {
            "defaultMode": 420,
            "secretName": "default-token-lzwkl"
          }
        }]
      },
      "status": {
        "conditions": [{
            "lastProbeTime": null,
            "lastTransitionTime": "2017-06-30T22:06:28Z",
            "status": "True",
            "type": "Initialized"
          },
          {
            "lastProbeTime": null,
            "lastTransitionTime": "2017-06-30T22:08:24Z",
            "status": "True",
            "type": "Ready"
          },
          {
            "lastProbeTime": null,
            "lastTransitionTime": "2017-06-30T22:06:28Z",
            "status": "True",
            "type": "PodScheduled"
          }
        ],
        "containerStatuses": [{
          "containerID": "docker://625d6e199bbaeb3c9c8a7a26b6e8125c9fb74a4ec7e680656dd3c0627a883517",
          "image": "gcr.io/kate-heptio/viz:v1",
          "imageID": "docker-pullable://gcr.io/kate-heptio/viz@sha256:7f0b4425182edaa01ca3bbc33108b162822c1ffb20740e1549bd29163bcf8951",
          "lastState": {},
          "name": "viz",
          "ready": true,
          "restartCount": 0,
          "state": {
            "running": {
              "startedAt": "2017-06-30T22:08:24Z"
            }
          }
        }],
        "hostIP": "10.0.9.70",
        "phase": "Running",
        "podIP": "192.168.168.14",
        "qosClass": "BestEffort",
        "startTime": "2017-06-30T22:06:28Z"
      }
    },
    {
      "apiVersion": "v1",
      "kind": "ReplicationController",
      "metadata": {
        "creationTimestamp": "2017-07-11T18:19:37Z",
        "generation": 1,
        "labels": {
          "app": "cluster-insight",
          "version": "v2"
        },
        "name": "cluster-insight-controller",
        "namespace": "default",
        "resourceVersion": "3015028",
        "selfLink": "/api/v1/namespaces/default/replicationcontrollers/cluster-insight-controller",
        "uid": "7fab1bf6-6665-11e7-a8b7-0679f19ff252"
      },
      "spec": {
        "replicas": 1,
        "selector": {
          "app": "cluster-insight",
          "version": "v2"
        },
        "template": {
          "metadata": {
            "creationTimestamp": null,
            "labels": {
              "app": "cluster-insight",
              "version": "v2"
            }
          },
          "spec": {
            "containers": [{
              "image": "kubernetes/cluster-insight:v2.0-alpha",
              "imagePullPolicy": "IfNotPresent",
              "name": "cluster-insight",
              "ports": [{
                "containerPort": 5555,
                "name": "cluster-insight",
                "protocol": "TCP"
              }],
              "resources": {},
              "terminationMessagePath": "/dev/termination-log",
              "terminationMessagePolicy": "File"
            }],
            "dnsPolicy": "ClusterFirst",
            "restartPolicy": "Always",
            "schedulerName": "default-scheduler",
            "securityContext": {},
            "terminationGracePeriodSeconds": 30
          }
        }
      },
      "status": {
        "availableReplicas": 1,
        "fullyLabeledReplicas": 1,
        "observedGeneration": 1,
        "readyReplicas": 1,
        "replicas": 1
      }
    },
    {
      "apiVersion": "v1",
      "kind": "ReplicationController",
      "metadata": {
        "annotations": {
          "kubectl.kubernetes.io/last-applied-configuration": "{\"apiVersion\":\"v1\",\"kind\":\"ReplicationController\",\"metadata\":{\"annotations\":{},\"labels\":{\"cobeio/app\":\"agent\",\"cobeio/role\":\"kubernetes\",\"cobeio/ti\":\"viz\",\"cobeio/version\":\"0.18.1-v1\"},\"name\":\"cobe-agent-viz\",\"namespace\":\"default\"},\"spec\":{\"replicas\":1,\"selector\":{\"cobeio/app\":\"agent\",\"cobeio/role\":\"kubernetes\",\"cobeio/ti\":\"viz\",\"cobeio/version\":\"0.18.1-v1\"},\"template\":{\"metadata\":{\"labels\":{\"cobeio/app\":\"agent\",\"cobeio/role\":\"kubernetes\",\"cobeio/ti\":\"viz\",\"cobeio/version\":\"0.18.1-v1\"}},\"spec\":{\"containers\":[{\"args\":[\"--dest=tcp://modeld.viz.cobe.io:25010\",\"--stream-optimise\"],\"image\":\"cobeio/entityd:0.18.1-v1\",\"name\":\"entityd\",\"resources\":{\"limits\":{\"cpu\":\"1000m\",\"memory\":\"100Mi\"},\"requests\":{\"cpu\":\"50m\",\"memory\":\"55Mi\"}},\"volumeMounts\":[{\"mountPath\":\"/opt/entityd/keys\",\"name\":\"streamapi-keys\",\"readOnly\":true},{\"mountPath\":\"/var/run\",\"name\":\"host-var-run\",\"readOnly\":false}]},{\"image\":\"cobeio/kubectl:v1.3.0\",\"name\":\"kubeproxy\",\"resources\":{\"limits\":{\"cpu\":\"500m\",\"memory\":\"50Mi\"},\"requests\":{\"cpu\":\"20m\",\"memory\":\"30Mi\"}}}],\"hostPID\":true,\"restartPolicy\":\"Always\",\"volumes\":[{\"name\":\"streamapi-keys\",\"secret\":{\"secretName\":\"cobe-agent-viz-keys\"}},{\"hostPath\":{\"path\":\"/var/run\"},\"name\":\"host-var-run\"}]}}}}\n"
        },
        "creationTimestamp": "2017-07-11T17:03:37Z",
        "generation": 1,
        "labels": {
          "cobeio/app": "agent",
          "cobeio/role": "kubernetes",
          "cobeio/ti": "viz",
          "cobeio/version": "0.18.1-v1"
        },
        "name": "cobe-agent-viz",
        "namespace": "default",
        "resourceVersion": "5991267",
        "selfLink": "/api/v1/namespaces/default/replicationcontrollers/cobe-agent-viz",
        "uid": "e1b53acc-665a-11e7-a8b7-0679f19ff252"
      },
      "spec": {
        "replicas": 1,
        "selector": {
          "cobeio/app": "agent",
          "cobeio/role": "kubernetes",
          "cobeio/ti": "viz",
          "cobeio/version": "0.18.1-v1"
        },
        "template": {
          "metadata": {
            "creationTimestamp": null,
            "labels": {
              "cobeio/app": "agent",
              "cobeio/role": "kubernetes",
              "cobeio/ti": "viz",
              "cobeio/version": "0.18.1-v1"
            }
          },
          "spec": {
            "containers": [{
                "args": [
                  "--dest=tcp://modeld.viz.cobe.io:25010",
                  "--stream-optimise"
                ],
                "image": "cobeio/entityd:0.18.1-v1",
                "imagePullPolicy": "IfNotPresent",
                "name": "entityd",
                "resources": {
                  "limits": {
                    "cpu": "1",
                    "memory": "100Mi"
                  },
                  "requests": {
                    "cpu": "50m",
                    "memory": "55Mi"
                  }
                },
                "terminationMessagePath": "/dev/termination-log",
                "terminationMessagePolicy": "File",
                "volumeMounts": [{
                    "mountPath": "/opt/entityd/keys",
                    "name": "streamapi-keys",
                    "readOnly": true
                  },
                  {
                    "mountPath": "/var/run",
                    "name": "host-var-run"
                  }
                ]
              },
              {
                "image": "cobeio/kubectl:v1.3.0",
                "imagePullPolicy": "IfNotPresent",
                "name": "kubeproxy",
                "resources": {
                  "limits": {
                    "cpu": "500m",
                    "memory": "50Mi"
                  },
                  "requests": {
                    "cpu": "20m",
                    "memory": "30Mi"
                  }
                },
                "terminationMessagePath": "/dev/termination-log",
                "terminationMessagePolicy": "File"
              }
            ],
            "dnsPolicy": "ClusterFirst",
            "hostPID": true,
            "restartPolicy": "Always",
            "schedulerName": "default-scheduler",
            "securityContext": {},
            "terminationGracePeriodSeconds": 30,
            "volumes": [{
                "name": "streamapi-keys",
                "secret": {
                  "defaultMode": 420,
                  "secretName": "cobe-agent-viz-keys"
                }
              },
              {
                "hostPath": {
                  "path": "/var/run"
                },
                "name": "host-var-run"
              }
            ]
          }
        }
      },
      "status": {
        "fullyLabeledReplicas": 1,
        "observedGeneration": 1,
        "replicas": 1
      }
    },
    {
      "apiVersion": "v1",
      "kind": "Service",
      "metadata": {
        "creationTimestamp": "2017-07-11T18:19:28Z",
        "labels": {
          "app": "cluster-insight",
          "version": "v2"
        },
        "name": "cluster-insight",
        "namespace": "default",
        "resourceVersion": "3014917",
        "selfLink": "/api/v1/namespaces/default/services/cluster-insight",
        "uid": "7a49a404-6665-11e7-a8b7-0679f19ff252"
      },
      "spec": {
        "clusterIP": "10.105.154.26",
        "ports": [{
          "name": "cluster-insight",
          "port": 5555,
          "protocol": "TCP",
          "targetPort": "cluster-insight"
        }],
        "selector": {
          "app": "cluster-insight",
          "version": "v2"
        },
        "sessionAffinity": "None",
        "type": "ClusterIP"
      },
      "status": {
        "loadBalancer": {}
      }
    },
    {
      "apiVersion": "v1",
      "kind": "Service",
      "metadata": {
        "creationTimestamp": "2017-06-15T18:14:20Z",
        "labels": {
          "component": "apiserver",
          "provider": "kubernetes"
        },
        "name": "kubernetes",
        "namespace": "default",
        "resourceVersion": "8",
        "selfLink": "/api/v1/namespaces/default/services/kubernetes",
        "uid": "738d53d1-51f6-11e7-bb77-0679f19ff252"
      },
      "spec": {
        "clusterIP": "10.96.0.1",
        "ports": [{
          "name": "https",
          "port": 443,
          "protocol": "TCP",
          "targetPort": 6443
        }],
        "sessionAffinity": "ClientIP",
        "type": "ClusterIP"
      },
      "status": {
        "loadBalancer": {}
      }
    },
    {
      "apiVersion": "v1",
      "kind": "Service",
      "metadata": {
        "creationTimestamp": "2017-06-29T21:00:42Z",
        "labels": {
          "run": "nginx-kate"
        },
        "name": "nginx-kate",
        "namespace": "default",
        "resourceVersion": "1611147",
        "selfLink": "/api/v1/namespaces/default/services/nginx-kate",
        "uid": "031f9ac5-5d0e-11e7-a8b7-0679f19ff252"
      },
      "spec": {
        "clusterIP": "10.109.69.206",
        "ports": [{
          "nodePort": 31245,
          "port": 80,
          "protocol": "TCP",
          "targetPort": 80
        }],
        "selector": {
          "run": "nginx-kate"
        },
        "sessionAffinity": "None",
        "type": "LoadBalancer"
      },
      "status": {
        "loadBalancer": {
          "ingress": [{
            "hostname": "a031f9ac55d0e11e7a8b70679f19ff25-1950392911.us-west-2.elb.amazonaws.com"
          }]
        }
      }
    },
    {
      "apiVersion": "v1",
      "kind": "Service",
      "metadata": {
        "annotations": {
          "kubectl.kubernetes.io/last-applied-configuration": "{\"apiVersion\":\"v1\",\"kind\":\"Service\",\"metadata\":{\"annotations\":{},\"labels\":{\"run\":\"viz\"},\"name\":\"viz\",\"namespace\":\"default\"},\"spec\":{\"ports\":[{\"name\":\"tcp-80\",\"port\":80,\"protocol\":\"TCP\",\"targetPort\":8080}],\"selector\":{\"run\":\"viz\"},\"type\":\"LoadBalancer\"}}\n"
        },
        "creationTimestamp": "2017-06-30T22:06:28Z",
        "labels": {
          "run": "viz"
        },
        "name": "viz",
        "namespace": "default",
        "resourceVersion": "1746962",
        "selfLink": "/api/v1/namespaces/default/services/viz",
        "uid": "5dd25b00-5de0-11e7-a8b7-0679f19ff252"
      },
      "spec": {
        "clusterIP": "10.104.216.99",
        "ports": [{
          "name": "tcp-80",
          "nodePort": 31408,
          "port": 80,
          "protocol": "TCP",
          "targetPort": 8080
        }],
        "selector": {
          "run": "viz"
        },
        "sessionAffinity": "None",
        "type": "LoadBalancer"
      },
      "status": {
        "loadBalancer": {
          "ingress": [{
            "hostname": "a5dd25b005de011e7a8b70679f19ff25-2092058082.us-west-2.elb.amazonaws.com"
          }]
        }
      }
    },
    {
      "apiVersion": "extensions/v1beta1",
      "kind": "Deployment",
      "metadata": {
        "annotations": {
          "deployment.kubernetes.io/revision": "1"
        },
        "creationTimestamp": "2017-06-29T20:59:28Z",
        "generation": 4,
        "labels": {
          "run": "nginx-kate"
        },
        "name": "nginx-kate",
        "namespace": "default",
        "resourceVersion": "2895653",
        "selfLink": "/apis/extensions/v1beta1/namespaces/default/deployments/nginx-kate",
        "uid": "d7332257-5d0d-11e7-a8b7-0679f19ff252"
      },
      "spec": {
        "replicas": 2,
        "selector": {
          "matchLabels": {
            "run": "nginx-kate"
          }
        },
        "strategy": {
          "rollingUpdate": {
            "maxSurge": 1,
            "maxUnavailable": 1
          },
          "type": "RollingUpdate"
        },
        "template": {
          "metadata": {
            "creationTimestamp": null,
            "labels": {
              "run": "nginx-kate"
            }
          },
          "spec": {
            "containers": [{
              "image": "nginx:1.13.1",
              "imagePullPolicy": "IfNotPresent",
              "name": "nginx-kate",
              "ports": [{
                "containerPort": 80,
                "protocol": "TCP"
              }],
              "resources": {},
              "terminationMessagePath": "/dev/termination-log",
              "terminationMessagePolicy": "File"
            }],
            "dnsPolicy": "ClusterFirst",
            "restartPolicy": "Always",
            "schedulerName": "default-scheduler",
            "securityContext": {},
            "terminationGracePeriodSeconds": 30
          }
        }
      },
      "status": {
        "availableReplicas": 2,
        "conditions": [{
          "lastTransitionTime": "2017-06-29T20:59:28Z",
          "lastUpdateTime": "2017-06-29T20:59:28Z",
          "message": "Deployment has minimum availability.",
          "reason": "MinimumReplicasAvailable",
          "status": "True",
          "type": "Available"
        }],
        "observedGeneration": 4,
        "readyReplicas": 2,
        "replicas": 2,
        "updatedReplicas": 2
      }
    },
    {
      "apiVersion": "extensions/v1beta1",
      "kind": "Deployment",
      "metadata": {
        "annotations": {
          "deployment.kubernetes.io/revision": "1",
          "kubectl.kubernetes.io/last-applied-configuration": "{\"apiVersion\":\"extensions/v1beta1\",\"kind\":\"Deployment\",\"metadata\":{\"annotations\":{},\"labels\":{\"run\":\"viz\"},\"name\":\"viz\",\"namespace\":\"default\"},\"spec\":{\"replicas\":1,\"selector\":{\"matchLabels\":{\"run\":\"viz\"}},\"template\":{\"metadata\":{\"labels\":{\"run\":\"viz\"}},\"spec\":{\"containers\":[{\"env\":[{\"name\":\"SKIP_CORS_CHECK\",\"value\":\"true\"}],\"image\":\"gcr.io/kate-heptio/viz:v1\",\"imagePullPolicy\":\"IfNotPresent\",\"name\":\"viz\",\"ports\":[{\"containerPort\":8080,\"protocol\":\"TCP\"}]}],\"restartPolicy\":\"Always\"}}}}\n"
        },
        "creationTimestamp": "2017-06-30T22:06:28Z",
        "generation": 4,
        "labels": {
          "run": "viz"
        },
        "name": "viz",
        "namespace": "default",
        "resourceVersion": "3019777",
        "selfLink": "/apis/extensions/v1beta1/namespaces/default/deployments/viz",
        "uid": "5dc08b57-5de0-11e7-a8b7-0679f19ff252"
      },
      "spec": {
        "replicas": 2,
        "selector": {
          "matchLabels": {
            "run": "viz"
          }
        },
        "strategy": {
          "rollingUpdate": {
            "maxSurge": 1,
            "maxUnavailable": 1
          },
          "type": "RollingUpdate"
        },
        "template": {
          "metadata": {
            "creationTimestamp": null,
            "labels": {
              "run": "viz"
            }
          },
          "spec": {
            "containers": [{
              "env": [{
                "name": "SKIP_CORS_CHECK",
                "value": "true"
              }],
              "image": "gcr.io/kate-heptio/viz:v1",
              "imagePullPolicy": "IfNotPresent",
              "name": "viz",
              "ports": [{
                "containerPort": 8080,
                "protocol": "TCP"
              }],
              "resources": {},
              "terminationMessagePath": "/dev/termination-log",
              "terminationMessagePolicy": "File"
            }],
            "dnsPolicy": "ClusterFirst",
            "restartPolicy": "Always",
            "schedulerName": "default-scheduler",
            "securityContext": {},
            "terminationGracePeriodSeconds": 30
          }
        }
      },
      "status": {
        "availableReplicas": 2,
        "conditions": [{
          "lastTransitionTime": "2017-06-30T22:06:28Z",
          "lastUpdateTime": "2017-06-30T22:06:28Z",
          "message": "Deployment has minimum availability.",
          "reason": "MinimumReplicasAvailable",
          "status": "True",
          "type": "Available"
        }],
        "observedGeneration": 4,
        "readyReplicas": 2,
        "replicas": 2,
        "updatedReplicas": 2
      }
    },
    {
      "apiVersion": "extensions/v1beta1",
      "kind": "ReplicaSet",
      "metadata": {
        "annotations": {
          "deployment.kubernetes.io/desired-replicas": "2",
          "deployment.kubernetes.io/max-replicas": "3",
          "deployment.kubernetes.io/revision": "1"
        },
        "creationTimestamp": "2017-06-29T20:59:28Z",
        "generation": 4,
        "labels": {
          "pod-template-hash": "861736919",
          "run": "nginx-kate"
        },
        "name": "nginx-kate-861736919",
        "namespace": "default",
        "ownerReferences": [{
          "apiVersion": "extensions/v1beta1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "Deployment",
          "name": "nginx-kate",
          "uid": "d7332257-5d0d-11e7-a8b7-0679f19ff252"
        }],
        "resourceVersion": "2895651",
        "selfLink": "/apis/extensions/v1beta1/namespaces/default/replicasets/nginx-kate-861736919",
        "uid": "d7338f42-5d0d-11e7-a8b7-0679f19ff252"
      },
      "spec": {
        "replicas": 2,
        "selector": {
          "matchLabels": {
            "pod-template-hash": "861736919",
            "run": "nginx-kate"
          }
        },
        "template": {
          "metadata": {
            "creationTimestamp": null,
            "labels": {
              "pod-template-hash": "861736919",
              "run": "nginx-kate"
            }
          },
          "spec": {
            "containers": [{
              "image": "nginx:1.13.1",
              "imagePullPolicy": "IfNotPresent",
              "name": "nginx-kate",
              "ports": [{
                "containerPort": 80,
                "protocol": "TCP"
              }],
              "resources": {},
              "terminationMessagePath": "/dev/termination-log",
              "terminationMessagePolicy": "File"
            }],
            "dnsPolicy": "ClusterFirst",
            "restartPolicy": "Always",
            "schedulerName": "default-scheduler",
            "securityContext": {},
            "terminationGracePeriodSeconds": 30
          }
        }
      },
      "status": {
        "availableReplicas": 2,
        "fullyLabeledReplicas": 2,
        "observedGeneration": 4,
        "readyReplicas": 2,
        "replicas": 2
      }
    },
    {
      "apiVersion": "extensions/v1beta1",
      "kind": "ReplicaSet",
      "metadata": {
        "annotations": {
          "deployment.kubernetes.io/desired-replicas": "2",
          "deployment.kubernetes.io/max-replicas": "3",
          "deployment.kubernetes.io/revision": "1"
        },
        "creationTimestamp": "2017-06-30T22:06:28Z",
        "generation": 4,
        "labels": {
          "pod-template-hash": "2517118100",
          "run": "viz"
        },
        "name": "viz-2517118100",
        "namespace": "default",
        "ownerReferences": [{
          "apiVersion": "extensions/v1beta1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "Deployment",
          "name": "viz",
          "uid": "5dc08b57-5de0-11e7-a8b7-0679f19ff252"
        }],
        "resourceVersion": "3019776",
        "selfLink": "/apis/extensions/v1beta1/namespaces/default/replicasets/viz-2517118100",
        "uid": "5dc0f612-5de0-11e7-a8b7-0679f19ff252"
      },
      "spec": {
        "replicas": 2,
        "selector": {
          "matchLabels": {
            "pod-template-hash": "2517118100",
            "run": "viz"
          }
        },
        "template": {
          "metadata": {
            "creationTimestamp": null,
            "labels": {
              "pod-template-hash": "2517118100",
              "run": "viz"
            }
          },
          "spec": {
            "containers": [{
              "env": [{
                "name": "SKIP_CORS_CHECK",
                "value": "true"
              }],
              "image": "gcr.io/kate-heptio/viz:v1",
              "imagePullPolicy": "IfNotPresent",
              "name": "viz",
              "ports": [{
                "containerPort": 8080,
                "protocol": "TCP"
              }],
              "resources": {},
              "terminationMessagePath": "/dev/termination-log",
              "terminationMessagePolicy": "File"
            }],
            "dnsPolicy": "ClusterFirst",
            "restartPolicy": "Always",
            "schedulerName": "default-scheduler",
            "securityContext": {},
            "terminationGracePeriodSeconds": 30
          }
        }
      },
      "status": {
        "availableReplicas": 2,
        "fullyLabeledReplicas": 2,
        "observedGeneration": 4,
        "readyReplicas": 2,
        "replicas": 2
      }
    }
  ],
  "kind": "List",
  "metadata": {},
  "resourceVersion": "",
  "selfLink": ""
}