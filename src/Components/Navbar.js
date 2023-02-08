import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
                <a class="navbar-brand text-white" href="/">TRUST NEWS</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
                         </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/general">General</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="/business">Business</a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link active text-white" aria-current="page" href="/tesla">Tesla</a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link active text-white" aria-current="page" href="/health">Health</a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link active text-white" aria-current="page" href="/science">Science</a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link active text-white" aria-current="page" href="/sports">Sports</a>
                        </li>
                        <li class="nav-item">
                              <a class="nav-link active text-white" aria-current="page" href="/technology">Technology</a>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
  )
}

export default Navbar

