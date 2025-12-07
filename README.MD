MindScan

MindScan is a lightweight, web-based deep learning system designed for automated brain tumor detection and classification from MRI scans. The platform provides an intuitive interface where users can upload MRI images and instantly receive predictions powered by a hierarchical MobileNetV2 architecture.

Overview

MindScan processes MRI scans through a carefully designed preprocessing pipeline that includes grayscale conversion, black-border removal, CLAHE contrast enhancement, bilateral denoising, and intensity normalization. These steps enhance feature clarity and ensure consistent input for the models.

The system uses a dual-stage architecture. The first stage performs binary classification to determine whether a tumor is present. If a tumor is detected, the second stage classifies the case into one of three tumor types: glioma, meningioma, or pituitary. This approach ensures both efficiency and high accuracy.

Performance

The underlying MobileNetV2 models were trained on preprocessed MRI datasets, achieving:

Binary tumor detection accuracy: 99%
Multi-class tumor classification accuracy: 91.3%

These results highlight the system’s reliability and its suitability for real-time and clinical-oriented applications.

Features

Upload MRI images directly through the web interface.
Receive real-time tumor predictions with clear classification results.
Lightweight architecture optimized for fast client–server deployment.
High accuracy through enhanced preprocessing and a hierarchical pipeline.

Live Demo

MindScan interface:
https://darttgoblin.github.io/MindScan/MindScan.html