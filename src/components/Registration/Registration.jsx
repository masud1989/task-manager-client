import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { RegistartionRequest } from '../../APIRequest/APIRequest';
// import { useNavigate} from "react-router-dom";
import {ErrorToast, IsEmail, IsEmpty, IsMobile} from "../../helpers/FormHelper";
// import {RegistrationRequest} from "../../APIRequest/APIRequest";

const Registration = () => {
    
    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef=useRef();
    let navigate=useNavigate();

    const onRegistration = () => {
        let email=emailRef.value;
        let firstName=firstNameRef.value;
        let lastName=lastNameRef.value;
        let mobile=mobileRef.value;
        let password= passwordRef.value;
        let photo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAKKBAMAAACXHYjMAAAAD1BMVEXoQwDm5ub////oLQDus5xIaxPbAAAgAElEQVR42uyda5qcrBKAneACIu0ConEBzKcLaJX9r+mofZmZHAupEgGx/JNU8jy0+Fo3qsCsflxV8bhYPJ2Y8eNghCwyQhYZISPkx8EIWWSELDJCRsiPgxGyyAhZZISMkB8HI2QxHMLnn/L57yyeTmSEjJBFRsgiI2SE/DgYIYuMkEVGyAj5cTBCFhkhi4yQEfLjYIQsBkTItTcu+bLICFlkhIyQHwcjZJERssgIGSE/DkbIIiNkkREyQn4cjJBFRsgiGSHX3rjkyyIjZJERMkJ+HIyQRUbIIiM0ipUsKkZ4OnGi9pR6PV/1+2KEJxDl9JcZW5a1P64s07oo67qqGGHcYjXBa8WC7N9r+kfVTiCHiTMjjFNsCp2twvsJUmS6HxhhbKKUTXkXW/i+MGb5QpERxiJO3u+etSpDXKJVunwt9zPC0PFLo5H83ro4+cXTIzx9wUzKXgsKwAfFWRW55BtUnCyoaLMdV6vykhGGEyeAZAX85hUniIwwiCibu9gNcIGo8qFihP7FRrsB+ICoZ4iM0Ks42dDM4TVFpzUj9Cn2DpzgvxBzzQj9iQ5t6A9rygg9iY1bG/pdEQdG6EGUh6jgd0VkhIeK8jAV/FJERnikKPVdZYdeIi8Z4aHLMeJggsu6acUIjxKnbD7zcE15PiM8RjzYDX5fNR3Og/BEFTLZ31Xm6ZocIpd83bdWeHCDPxwiI3TdGurHDX53iIzQbXeMb4Izw4oRuhMb3Wber/YZmDJCB2IQgm+GjHC/6CuZAJILRrhbbO4qC3SJmSEj3CsGJPhgyAh3ikEJLgwZ4T4xMMGFISPcIza/AxOcGH4MjJAuNmWbBb/EcysbI6SIMRCccoueEVJFHQPBmaGOGGHUJTH/66LG9VIu+eL7taMh+GDICLFiNWYRXd3ACLFiM+5LJ4T4eWjJTpVuu4ER4sQ9Kb2ajydRWa617qvpaqa/3B9M6YO+U3xGaClSU3oxY9LDfIBQ/W3k+aSZqiiXQ02II6sPRogRaemEWPAVhmb+ufaYEffmC80I7cWe4rnmEyzeWmf6ITkrI62dhhFaioRQRiz8bLO3uiCdc7KENIzQQsSvbbdt3ssK80OyKvEQl81rjHBblNhgdAIoJX6HTVXesfZUfDBCCxG7MiravCD+riyw+72nkIYRboqNIAAk/y4WopKMcEtsUOtqrerlvt+tGtzxUd3ACM2i1AilEEpLB4uxJWa3hohs92F89UJMeeJhQx38boFoVH2fi8ElX6DTYkQ8y4cNdfG7KEXsBkZoEO0zwrYrXN5GMbaYzIIR7u+0mFJBt7dRldahqdCMEBIrYW9EK+e3YW9M1cAIga3YtssyoiurA26jsF6azRkhsBW7tTaiB92GbWQqNCNcE22j0bY/bNtfZfkWiW5ghP8vWprR2Q0edxu22cUUlTLCf0XLZRmhiurQ27BlGMtO/IgQ2pnRieDRxqC3Y/haK2WEL9HOjIo5nz86quqtAtM2rxjhD9GqxCS6ysddDXbJxcAIv4tWZlR00s9dVTYMRdczwi/RKpZ5EvRxV1YM2yWiCY4wmpY1K4L+7sqKYRQNbZEgtIllRNf4vCubmEbkjPDddShsIhmvd2UXlw6M0LrrcI5FPd+VDcOcET67DpVNRu/9xbLI8VvNCC1jGVWE8NCFsIhoGKGVEj6OnPB/k9sHbryXSi+NcDuWeR4aEuAmNxmK4G2lESDcjmXEhwx1k9VmO1Ybuq00AoSbSvhalAlyk9Vti6Earo5w0xO+CYa5ye1lmqcaXhfhphKqMmzr+1ZYKtRwbYSbnrDtQ5/ZsxnSPAqHl0W4pYTiow+9AWU7pBmujLDeUELRhXw6L3HDHYpFDYMhDFwv3FBCbzXerQrw9mr3VUu+W54wloNAN9yhyK+LcEsJf9VxIKz/qE01vCbCDSV8Z4ThEW65w4+rItxQQlXUsSDcyg6VvCbCLSXs63gQ1qXaqP1eEqG5TijyXkaEsDEvlr4LFpdCuKGEShYxIazN21fDbbEIidDsCdu+iAuh2ZSKYFssAiI0K6HookNojkpbfT2E5bhZhYsLoTkqfanhlRAa64Tio4oPofxtoYYXQijHzdXt6LSwMN9zdTGEjfGNLuNE2JvWSsVwLYTGYOZhRiNEWBhNaR7E+AerFxozipD9ThvdUOPWgUKXKfkalbDt61gRmpPD/EoIjWtrXcQIjWqYDxdCaMooWu3mh6rlz74oy2//v3vk0njn10FoyijEp5OWtbrR9/ns/PkDQPM5+Lke6srFyKbl7u46CI0ZhXTw1bX5SyI/z6YU87dk9OBgCsKUV1wFoSmYWRKKfT/UlMD3fKZ/fX5Zec8Ufptu/ioIDRnF7q5D2Ri/AvOEuGcKxlBsuAhCQzAj+n363eitTxa0qt9n7mrT7etrIDQFM92+kbXNgaJtXu6agqnG0l0DYbOlhNSRa215iqHS9Y4pmDZjCXkFhIZg5lmhoG6SuiMOZ384LdoPmdTwebhe2ggND0DoPS7K+mTthyJWxRF7IlV/AYTNphKSRrY0ol/PWu/IXsaNklPaCOW2ElJG1uhPx84MqTMyqGFXeUbov/ZmSAo7elexJnz89x3U4GdkWO1WMvmSryGY0eSWVArBpy2lzQhe7V62OaWNcDR4Qmo/I+0T6l8njuB/16CGXeoIK2XICYmdVDQd/KaHhN81qKFMHCFsRztyJxWZ4OvUGMLvGtQwTxshnBTOCzOkkXFfjl3dz0L5XVgNuyFphI1JCUkjN9hPqP8bfQy034XVUCSNUN7hUptzbbBkOLlD0ozAV2f5RGWyCA2La8SRqcHot3K+rkgzgnerzZY0WYSgHZ07Zigj73OEr5CG1s18M1nSVBHCi2uPIg1+5Lvaj/ARQhJmpAzZfaoIS2FeWUSPrF0QfH6bt3a3s0cNySKE7ShtZ5cLM/rYG0iaEfgCiWQRwq8tcX+lEzOavT9zjv5eJTifz1QRgnb02W+BHVk7Ivjow65dbnTydwCG33ohaEeVpIzsyIx+MwPYGYF5hRi8PVi/CH/DdofSaXFX7hASD6T8uxXkJoYQ1BohSS25InN5DZQJgnWXV4CUGkLldDfab+UUYV653Ksm0kQIGT7xQRnZsRIuaoi/DWiF9lm7Tw3hCC+PEkYelWOEHaUbCgxouhQRwn6D8ux61wSJW1NvZv+eFkLQjlIsmMuE4t8QBGfPlTEmTQvhCAYzhJG1co+w1YQJggFNlx7CBnpylD2hRyjh11Kpm8B4SA8hZEcpIx+hhF8VC9wEhSmtSArhzVRmwo58yw65KGFkbbSkKSGETN+jzIQcuVHHIHwm5LgJQhZhMctJIVTQCrfDyMiRGiInCEVHqSGEUoqlZwY5cqWOQvgomeAmCPbQ+DnPy1+9ELKjhE/6yPthCAXlNEPQklZJlXwbh1u5nK+O/luwQE4QXGTr00IIvKn/uezBdVWwwE7wL7zslBDCm7kmg3obxuxIhATVaWBLmg5C6LFTPqzVHKmEUxyJnyC4yNYnhBCKIT8JIx+qhDTVAW1MQgiBoO3dJYR5G8SxCDPCcwcMg9AJIbyBXc+u3gaHeQV+gtBr1VXJIITSgE/CZoaD7SjtuUPZfZ8MwgoyNIS3QR2NUBA2OoGOIhmEUCYXaivThiXF2wbIkubJILxB66P4wOHoYIbooW/G6tX5EQLPnRKwHW9HaXEyFGQNiSCEXCFhqN+Zhyt3lviKVBAC/ouQRDejD4QdYdnv5uxtiHFnE7CtcN7Uhx3Khx2lHUgJv6YplHyBbYVzsyx2qLsXhFmOny+0hNgngRBQndlcIYeSXuwo6UxR4DiW40+Y9YJwXXXEJ34oP3b0Ua7AzvfmTKHjQwi5QkJ3kCc7+nrwLvq7Dj8k2AdCwMQsLRfIRiNPdvT14FHzBRZouj4BhMDr+Ykfqsy8Xb2rXmeRAkJgF+UHfihfrvAVheDmu765QgwJIBzBlAI71N2bEorcVXer6M6PEHBgHX7XSD36M6SEnR7AyhHBrcaGsDR1H6KGarLMrzNEzvevM7caGcJ1B/bcB4ZDqPwRFIQzTLRy5VYjQ7juwARhqLtPLcwJ81Wu3GpcCGuTK8QNNfpEOLsw7Ja50ZVbjQshUO79Dz+UV1e4fAENO9+/ztxqVDubCsAV4ofy6QpphzMDzlCevOS7/uBbwlBeXeFSrEXfpAIXg8+M8G6shCKGkqNfhJ+E+Y5gR9yJEQIP/rOIHmFHmO8NbGM7McL1ir0gHJpb+iVIOiIdWA4eTo0QiEEkfii/0QzxiHQwnjkxwj9q3bTgh7p7RjjFM/ibHF0FtxEhBFyhy9P1j4tn8Dd5Wy9WnBnh+oMX2tULfmw8g79JrVxFRtEgLKFaIT5S8E3w+XVK5PSheOa8CBtnU/Idzbw+I4V8ZYWrVzZyhJSsOQBCghYCzvDMWniH2mbQQ929G9JXCyhuFVCtr8+cFiEQzUhXa1cHh6TO8uDuxAgF1EGKHUoGQEhYyAWiru68O5uAd7IiDCX8I1SU6a/bnf645xwGIWGoJgtwDYTp38B60zkRrjt3yteRKuWf4OtTUvt7tMSv0yK8gS3qaC0MgXBwhfB9bML5EI7Oekn+hED4i4IwSwrheusTqaNrDOELHR6YP5wU4boD+6QMdQuB8JMy/ZsztxqFFiqweS1ZLVz/5oE4qxauB6SUrxqESAvfiSFu+pVy5VZjQHgDoxn0UFmQy902oO6kCEd42Qrb666CICTsGgA2450VoYAXj5FDVUEQ0j4jeXOm0OERGqKZc2gh6RNOQL1pSAjhkDrCJnWEzxOtkEP9CYPwF2X6ZeYX4ZH1wrvBryOH+hMmIv1Fmv64Wrg/Y8l3PTT7JI08hkHYkaZ/czdU6Kr9uN4j7extiBXhHc6lTobQ5BOS1sLVGED1J0S4HpnJU2khSXXWl9jOiHB9p9a5tNAhwuGECFcTga5OH+H6wuKvEyI05RRYQyrCIFQOEebnQ2jMKU6CMKMhhLOKBBC+W7mQCLNTIVwN5BajfDKEwtRQeT2E2fkQGtNCLMIw5cJM0BBW4OLwuRCuv4q1u1UCHxcxmRNQYpgAQuKXxMr/sXduCYrqQBimDQs4IAsQhgWEgQXIZf9rOoLoKFZFyAX7T/SNbiCQj6pU6pJ8Sgo1EfbcxBALITktrCw6en4xwiM3McSqbDqRIRe9O+efQpjqvT4ZuD+ghXzpOUUXBkLWMYUVtbeJsARDWHqBkJbCNAwpTPxASBnWMhBFmnG54VAIM/pDDEOR0j7dDgxhaRMhmhQyo4gPUljpSuGnvDOd5uv3jHMRCiFlV4tY986fkkLd1z8zURoshPR3GAjCkpnbQyHsg0bIGHNQCLkBPWQprDxAKLWl8EPWjNSWwsgDKRRW3+FTuTNWXz8CQxiFjbCnZRqpsomcjFfaFTZYGWxcxLCFCvnSzhk0hNIqQoGFkJTCg90iqV+bzV3Q1U0CXwqFNkKs4jQu7UR0+Ag7OCnU7o0SHyH5FbaBIzxgIYysIvzzGYR/tXuDsQWQEPZMYq3mnU+fQXjQl0LqdjEUwiMzy9JFKMEQks6IBl4KG32En1o6SL836A4IGOFnMvKvydyhIhS0fy1shBIKIWeiYylSywgjJIQl41/TlsLPWKQGCEkbugVCmFtG+CE/d263sEs4QegoXphJOglP+844y6snfB6tbj3CR0K+pW2EOJscfBEyh+dPIIxtI+yAEJKKNDW4M8yeTbfDHB3h6YvQR4SRiSKF2fzurkhJnysSQi6vVlsKPzGrMJHCggwYgiOMjO78CYRGvSHApfAPlxqtfedPbMdsHeFfIIRnrke07/yBiWFl1BvUNxcDIeytIzzvbs+I2DrCBgdhah/h/rMKw22wwRGSUlgZ3Xn/WYUw643jF+FSCvc3SduQETpQpPubpE2OoUgdxQt7Lh1M/87H/Q1So974o5hpIoR8BZnLbHTnvfMQL9aMUW+cuKkxLkJTKSzREErvpNAU4d5JbCL9IrSMcO8Ctab4IrSMcO/qpipwhJEDKdzZxRYHjlA6kMJ9/TNjvNc6QoGN0Hj3t2xf/8wXoX2E+9ozVeFgB87QESa7DoY/hYMdOINHuOdgOKU+faXQNsJE7DsUfqXQOsI9B8OqCFwKSzcIj0gIM8mnNQJUNrGFTWZ33s/Tff3ejHqD/IwTmJBvyeXjm915x5lha9wbOTbCzA3C/TRplYeO0JEU7jYzFEMSuiJ1JIVJvlvyWvKVQjcI95pWzGlK9qUwDV4Kd9KkIv5KYelmUrGXj+0mLPalsMWWQhsIs100adMmX3PGFcJ9skmrxBHCCEcK08gVwj0cNHaMDlIKgRLynUnhHpq0Sb4IHSJM/3MuhuIn/yJ0iHAHTWppjSYfER6sNOR+dt/Y6Y3TXgiBkhDnQ9eJ+WKw0xseZrDZQpg7jjjJ5IvQMcLC8Z4V1Rehq4T8+6FbJ5vBrkTfspi1h6VTg2Z0rtlBGH0Rsocup4ZTsPeLkEH411pDDg0amdp6SPRa+94lQocemqtnxhnCBhxhbK8hd2KYWnvIs4cIG2sNOfPQCP2dX18O+y9C5aEjTTqHmaxoe7ILUhyER7cIXSWUXtNHHUohOsLcXkODEzGsh+QrhUpFahGhm+Uvmu6L8H5ImWORTYQuxPCeX2YFIWU1xy4QuokX8vNaWw3lvQshtNkbVAt/cUK+JEJhtSH7Rmmd2exZMliDhJB0EHZWGzpaZigu5qjF3qC2GsHap4LLyLfXkO3Qr+ys9iy9gyMQwtI9QssBi8k76hgh/s5pneWGrIrhFKKwqUjRESZ7ILQphqLNd0CYfqVwcWhvYiEa2z2LjzBiEkmtNjTUll1rFnuD3v4PCGFK2mO2G7IW+73l4NtESM6MkRCSvgn7DVlSpY39nqX3jkNCSHoI7TdkR5XeIhQWezYlvcRQCLkdf4yrNRaHNorvLZUyPR8e3VVr7DSp4NIOTO485pAOQ/f0XwvubtE8G4plks23N5HC/ovw5bAdzlEt6zp+3krJXJXWyXND5/ryi+LhFrewh7BygtBRvJDe9DPXzncqh6iurzqz7p7/mxkyrC+T+sd25wndiHG4bhijF8YjrSagkC8d89XNdS8HUbOxdUMnjfh5fqrHdP9aDp3mZ0dWssZQCMlQhR7CMhP1s/24SFIyMWkuA6EqK2eURHu1OwcohNyisttv1Z5rOsXlfnIupBnBh3Zfam7quLMlhQIf4VgYs/lWwyufWQz/jZStdsxCZotB9zUnR8hBozdO9CccIMKSMlZEs1gjOtU0aUTdLnQyud1s3XbbEVLNJVAIc3o433ir8kyyqeNlMlymo0uFbPNF2hk5rIqZ4Zbe6OkMOSgpFLQrctOtStZQ6RYnpxoMhUxeTF/BSWu3sTeOtEWOhJCsMGzyTbfiCU4WzfPJmxmOBNfWD4uLUWMuhVGOhbA3Rpgq0n3FsLzVxaaRmwku2lU2uPfr/06Emz7DVOk6k6/WXdJvMGrqJnkdv4WK+GCuhLDMGePBIB3Em9Trl2vzrJarTdH0pd2yl2/zo4wM8soDhFtMsnfrWtS32drjtQs/jsIUJdp9U6YhthTNkAY5mhSSE6P1c9v3gUDZEdem5/eCeLFNMgL/25xGEef7ezY+itDIPZGuqFy6VbE8f/5lpIZ4kdM2Jdp9o0ZvNtQvROgqXkgn4R3W3mrN8kA3qVgE6vJSIYlidnm+ZlKtqXa7fjRrXoHWQS762V3Ily6HXx22XhdAukrFy61GiDXlmLv8cTaClu2+M55m3R2bRLzHggQohFlkgLBc57duuP3NLkjGmK2U/yJ/Uwj3rn2W7a5dFGxlNjMZs4eTQjKHbSXCtR1aTwyZRJs8O4+x94voyVEk48s0gk2HWTEQbsodIV8+KtAQ9qQVuebadHUVtohVFWVzNHEuG1S0W64OGo9TGc1kduPsr/3HQnJiuKqoYMMq+KORaP7MG1I3LhbNijvTM3s/EK6RwnTLUgj1kBs/85YkuIsYBoOQTmc+rNFCm1JD7zF17WceNsX8mzVfIVkTE8NJIfklNivytTeuR3JjqPvM2wje5vfqO3MGaSAIN+8HMzPUfObNeTdN+/4r9ARhrolw+14iV4Z6zzxsjvbfU5EVCAUzs0eTwojJBlZfq7NQ5cRQa8AeNHLfbp+hQpGYuAV+EUIy6vl+A79SK5dw0HrIQofgtLqJhiKRBR5CekB4c61etdmYn7T9IUvNkhrSvf5u+8brcrJgCMmJ4eHNtbo7GNRxl297SC7DcbVBwzd04qaFUJVNzOLU0+RIda32Cof3pOu1D6mVevqYMMA3RH6GsaN+domwZNWJ4lqDis962JCwWxrUJYpGA6HoABFmGghNNvMRdTysfMhiOJtUJdapBsLWF4SyU15rVjpfyyFbkRuXDmdh1I6Ila9PGtWQCPkJLnut6U69opbxnO/JPmRhCvCWgcG+Pq1KckSErJuJL6Iw7dvRrImnYALzVKMKtdCIEqHCtQiGkA43xYprrSxBcoEYDfck0+eG2iGqbTQxGdbs65OmeJUgIjxHvD1DXmttx/MLp3guCszTpLgma2fnqLa1aFujqpIhtU8MiZBWi52ilElG1n5iwjXMvxFrbfPuCoRk7pboIBGSJqlI+WvPke1fPf9s33ccD7jXJ62ZeQMFL6RQ8FLofr9ze79GIYUeIaRnFTF7rU096vp3USbc65O6ROaYCEmpqthrz0AILzYp9/pHRZARDSG9WijrYETSo+NrbHLzNgkmwhPvYiOuzSKoX8c50MmzD+4QOowXMp4mwRVCIA2F/9xMr+UZCiMOLeTLOQsPzLU9lhQ2zOufFFMpPISKYeH15BINISNY5GvIwi+E+QaR/b2/mhasot8isr8fIWlfy5aWQjCEzPBWRn4h5B0VryeD6dE7liVCevyHRcjbM94iHOivFlcKI86eeTkZTY/eNeni9Y+RXwh5e8ZbhLRBmuMiPHKZQC8nw+nRmyZd1HxLWu/gIjxz/pmwEMbACGmTNCbWCpJ4CK+a9Pn1z/SJwAhpk7TJvUVIKhORIEshrR/bl5PPgAij18WgmDWPWmCEjD3TrSqD+vW/at3AQWkdjMomRUbTS8g7FYgIpwzt58QD8rQfBx27U8iXzYd5CXlnEhJhuyrxQJWxCIAwkatC3iUkQrHcayEjlckYLARGmPXsuz+efIYUwilF+/F96S9Rgkshbc8Mi5N7SISTq/Dxfeka5arARkjPFqr8+WRMa2bKDn2sXOwjHxEy9kz7dHIuMREudmTMWGsGGiFtz9TPGwaUqAif9x2iX2NKfUJGyHyZw9PJJ1CEi0XvmeU60KUw/UMifE5QB7VmFruHKIZCbISM97P1A2H+WIwnON8MOELaVHkqmSwFKkKZvy2JFSk+QprPY+EyqkG62IWK9k9IfIRMEOJxBYgSF2H3ZoUPRSUXEML/FJo05dMzQEKG/96X+RAr1whdxwsvh8wQ8W8p3xTWmhkB3d93UA36wCHfyyFdNyge4qXACJt3UWuReICQEbKpVPQqhQIXoby/L2NWz65EbIQJ83neEWa4Q+HD5incUJj7gJDxO9233ii9QEjbZPOqT+gImcj9fRuqkw8ImeFCpF4g5JZW6+aTzxEwwnmtdW40kK0fUsgPhjn4nOJf8Fo9FMIjHFhNio/wFnJh9Gic+IGQGwy7K0KBjPC62i83WNyGQniE3PtdEWbQBOeoWakeCvGlkEm3j6f/Is8pbnKWntUjJT5CbjDsPEDYqfRo7A1CZjC8TqpO2Ir0oNCj6/YuhkDIfaQ/ObaTe1IlCqN63Q7iv7yyaT7kas86xf9gwk185kiVu+7YfUK+7Goss6sbXQr5tAMRJ/4g5LJjKtxk/PuPVyQXa9UfhAU7WBQlOMHLYMDp0ab1CeF/ETu7l9gERcrq0SrxCSEHqilKdIQdp2IWFRfwCLkRrzvBI+T0qEi8QsiO+B34zD4SB06PLAtI0RFym/RW4NNCxRvEnklhwn2q+Ah7hQPcJ4ScD6ru0RE2kp1SeCaFzLQikugIOUOtyn1DWMKz2kh2SHxDmInAECbeIUyPYSF0tv/yByqbbodDUJpU/OzUsXsizMNCmHqIsAhKkzadjwiD0qQ/hY8IQ9KkDne7+yTCog9Oj3qH8L9gxPBahu4hwnA0KbtNLDrCMhhNKltPEYajSavcV4ShaFKnO/x8FmEwmrT1FmEomrTK/UUYhiYld/fzBWEYmnSs7d0P4X7xwutRCJp0ijPt1rF7I0zSEBCmfiMMQJNO/lGPEWYyCD3qM8K8DiPO5DFC/2P31ziTzwi9j93/FL4jzD3PJ60L7xEWfzx3rgWA0G8nm2hDQOj11LBJA0DodbhiTuL2HWHhsUFzT5rxHKHHU8P/27u77LZBIArAcfACylQLKBwvgBQtwHK0/zUVLClJcxLHPxLMDLdPvTntg/gO0sAIpfdtEOrdZDMjFScs3C+8+GFEDZ1CKjuSFVq+c1Rb0Lz4VgitUkJD7RDqLGhM79sh1LnXnXdmmiHU+RpU3plphlBl8/68M9MMoVXZcqKmCBVulJq/vi1CfS2n6Z2Zhgj1bZS++NYItRU0c6+3JUJtnd+emiNUNg2XFy6aItQ1DXuqRVilXzhHTbtscag1klUJNe2y9dQkoaK2odn5Ngmtml22QK0SapmGeYO7UUItm91pErZKqGQalj1cz4xQxzQM1DChii9gFD6ZzY1QwzQM1DSh/xN0TMKGCeVPw2kSNkwofhoux9EaJpQ+DYufCeVHKLxvuPQJ6xFW7BcuUfY5p95WHLraLd8lkuS+YRwcCGVPw55AKHsaRutBeDb8LdQwLyhAOB10ErqwCARCJ3q3+7ygAOHcdJJY0ZieQPgeJa7vp1U9CJeDTq/iDM0LgfC/IxbiPvgceAwdH0JxHYs4gFD4EYtqhyj4EgqraGLnQfg5Okl7NJeeKcMAAALtSURBVGbnuBAy6Be+RUHN37wkZDJ0rAhtJ6YqjdaD8EtCKbdS8+xBKPvl7p5A+O0v5YpSbqMg/O7lbgm30srv/jInlLDANz2B8FLkfysN1oPwYuS+VxoHD8LLkXnbyexOIPwpsv6IQnoQEgh/jJwfh6GzIPw5Or4vQ+WXt0F4RWT7ODS7wYLwqjgYrg9CfmPFqV/4MVqWj8NpRchsrLgSsixppq1REF77Qhu/kobL+05SCPmVNGZHILzxVRpehsvmNghviNYEXsUoCG+OjHbaTOgsCO+IfMrS0DkQ3hPZGE4fRQDhHbH7FfkIgvCueOBguHyYBIR3xcMx1hccLAgfiK62YTxZC8LHYl3D+EwOhA/GqvMw7sgzJ+TZL/zUAa5nGHcn5oPjRRDWM4zDyYJwlVjJcK5FQbhGrLE+NMtqAoSrxEPxvTYTlk+NgnCdmAxDWUHrLQjXjV3J/mEWBOHakYbXYjfTuHcehBtEKlWYxuk9GRCuH12RB6IJJ/Ig3Or3khR4IKZSVMhoiCRMf9/6gRj3y6e5QLhRdMctb6ZpPU+SRkMkYb6ZbjYR43k9D8KtIw0bVaYm7kncaEjoF3514uKwRVUTl29ZiBoNoYRpJq7+RDTvdQwIi0R3WLU0TYDWWRAWjuN6ZU0qY0ja5WsgJHtcBzGGkZwFYY1I3QqIMeydE3n5GgjzqfzHEE2agU7u5WsgzP2L9EwMjwB6ENZfJnYm3q6Y/s/T3JIAYf3o6PgUb7qhpn89vh2CAyGPmEub6+ZiTH57m4tQEPKKSXHMPJdmo0nM5ml086+ZACG7mIpLlxjNF5Ah/yzEM5+a61VIOMe0YBzP98sJM0yi46jmAvUTvv9Jaw5aPjdiSSWhxH7hzdFpvsA2CC0IEUGICEJEEIIQEYSIIEQEIQgRQYgIQkQQghCRJ6HafmEzEYQgRAQhIghBiOEAISIIEUEIQgwHCBFBiAhCEGI4QIiIk02IaPmCEMMBQkQQIt4Z/wGPpnsUwQ9fQwAAAABJRU5ErkJggg==";

        if(IsEmail(email)){
            ErrorToast("Valid Email Address Required !")
        }
        else if(IsEmpty(firstName)){
            ErrorToast("First Name Required !")
        }
        else if(IsEmpty(lastName)){
            ErrorToast("Last Name Required !")
        }
        else if(!IsMobile(mobile)){
            ErrorToast("Valid Mobile  Required !")
        }
        else if(IsEmpty(password)){
            ErrorToast("Password Required !")
        }
        else{
            RegistartionRequest(email, firstName, lastName, mobile, password, photo).then( (result)=>{
                if(result === true){
                    navigate('/Login')
                }
            })
            // RegistrationRequest(email,fastName,lastName,mobile,password,photo).then((result)=>{
            //     if(result===true){
            //         navigate("/login")
            //     }
            // })
        }
    }


    return (
        <div className="container">
            <div className="row  justify-content-center">
                <div className="col-md-10 col-lg-10 center-screen">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4>Sign Up</h4>
                            <hr/>
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-md-6 p-2">
                                        <label>Email Address</label>
                                        <input ref={(input)=>emailRef=input}  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-md-6 p-2">
                                        <label>First Name</label>
                                        <input ref={(input)=>firstNameRef=input} placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-6 p-2">
                                        <label>Last Name</label>
                                        <input ref={(input)=>lastNameRef=input} placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-6 p-2">
                                        <label>Mobile Number</label>
                                        <input ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className="col-md-6 p-2">
                                        <label>Password</label>
                                        <input ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    </div>

                                </div>
                                <div lassName="row mt-2 p-0">
                                    <div className="col-md-4 p-2">
                                        <button onClick={onRegistration} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Complete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Registration;