pipeline {
	agent any
  tools {
    nodejs 'NodeJS'
  }
	stages {
		stage('Checkout GitHub'){
			steps {
        git branch: 'main', credentialsId: 'github-credential', url: 'https://github.com/felipe300/djn-app.git'
			}
		}		
		stage('Install node dependencies'){
			steps {
        sh 'npm install'
			}
		}
		stage('Test Code'){
			steps {
        sh 'npm test'
			}
		}
		stage('Build Docker Image'){
			steps {
				script {
          def imageTag = "nodeimage:${BUILD_NUMBER}"
          docker.build(imageTag)
				}
			}
		}
		stage('Trivy Scan'){
			steps {
        echo 'Trivy'
			}
		}
		stage('Push Image to DockerHub'){
			steps {
				script {
          echo 'Push image'
				}
			}
		}
	}

	post {
		success {
			echo 'Build&Deploy completed successfully!'
		}
		failure {
			echo 'Build&Deploy failed. Check logs.'
		}
	}
}
