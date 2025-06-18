pipeline {
	agent any
	stages {
		stage('Checkout GitHub'){
			steps {
        echo "GitHub"
			}
		}		
		stage('Install node dependencies'){
			steps {
        echo "Install node dependencies"
			}
		}
		stage('Test Code'){
			steps {
        echo "Test Code"
			}
		}
		stage('Build Docker Image'){
			steps {
				script {
          echo "Build Docker Image"
				}
			}
		}
		stage('Trivy Scan'){
			steps {
        echo "Trivy"
			}
		}
		stage('Push Image to DockerHub'){
			steps {
				script {
            echo "Push image"
					}
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
